import React from 'react';
import ProfileHead from './ProfileHead';
import ProfileTabContent from './ProfileTabContent';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeTab: props.activeTab
    };
  }
  componentWillUpdate(props) {
    if (this.state.activeTab !== props.activeTab) {
      this.setState({
        activeTab: props.activeTab
      });
    }
  }

  render() {
    return <div>
      <ProfileHead/>
      <ProfileTabContent activeTab={this.state.activeTab} toggleTab={this.props.toggleTab}/>
    </div>;
  }
}

export default Profile;