import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as socketIO from 'socket.io-client';
import ChatPage from './containers/ChatPage';
import ProfilePage from './containers/Profile';
import Home from './containers/Home';
import './App.css';

const socket = socketIO.connect('http://localhost:4000');

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
