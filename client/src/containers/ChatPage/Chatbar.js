import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('newUserResponse', (data) => {
      setUsers(data);
      localStorage.setItem('userData', JSON.stringify(data));
    });
  }, [socket, users]);

  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>

      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
          {users.map((user) => (
            <NavLink to={`/profile/${user.userId}`} key={user.userId}>
              {user.userName}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
