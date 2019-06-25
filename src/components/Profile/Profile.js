import React from 'react';
import ProfileHead from './ProfileHead';
import ProfileTabContent from './ProfileTabContent';

class Profile extends React.Component {
  render() {
    return <div>
      <ProfileHead/>
      <ProfileTabContent/>
    </div>;
  }
}

export default Profile;