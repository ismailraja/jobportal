import React, { useEffect, useState } from 'react';
import './Profile.css';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <h1>Welcome, {user.userInfo.firstName}!</h1>
      <p>Email: {user.userInfo.email}</p>
      <p>Mobile: {user.userInfo.mobile}</p>
      <p>Intro: {user.userInfo.intro}</p>
      <p>Profile: {user.userInfo.profile}</p>
    </div>
  );
}

export default Profile;