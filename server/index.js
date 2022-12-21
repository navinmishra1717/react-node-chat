const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const PORT = 4000;

const httpServer = http.Server(app);
app.use(cors());

const socketIO = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on("message", (data) => {
    socketIO.emit("messageResponse", data);
  });

  socket.on("typing", (data) => socket.broadcast.emit("typingResponse", data));

  //Listens when a new user joins the server
  socket.on("newUser", (data) => {
    //Adds the new user to the list of users
    users.push({
      ...data,
      userId: users.length + 1,
      imageUrl: "",
    });
    //Sends the list of users to the client
    socketIO.emit("newUserResponse", users);
  });

  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
    users = users.filter((user) => user.socketID !== socket.id);
    socketIO.emit("newUserResponse", users);
    socket.disconnect();
  });
});

app.get("/api", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
