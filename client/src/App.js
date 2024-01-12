import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as socketIO from 'socket.io-client';
import ChatPage from './containers/ChatPage';
import ProfilePage from './containers/Profile';
import HomePage from './containers/Home';
import ContextPage from './containers/Context';
import './App.css';

const socket = socketIO.connect('http://localhost:4001');

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage socket={socket} />}></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/context" element={<ContextPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
