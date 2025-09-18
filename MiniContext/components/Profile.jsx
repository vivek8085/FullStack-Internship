import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Profile</h2>
      <div className="mt-2">{user ? `Logged as, ${user.name}` : 'Please login'}</div>
    </div>
  );
}

export default Profile;