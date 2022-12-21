import React, { useEffect, useState } from 'react';

const Profile = (props) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData, 'userData');
    setUser(userData.find((user) => user.userId === 1));
    setLoading(false);
  }, []);

  return loading ? (
    <>Loading...</>
  ) : (
    <>
      <h1>{user.userName}</h1>
      <img
        className="width"
        src={user.imageUrl}
        alt={'Photo of' + user.userName}
        style={{
          width: '200px',
          height: '200px',
        }}
      />
    </>
  );
};

export default Profile;
