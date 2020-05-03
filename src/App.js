import React from 'react';
import './Presentational/App.css';
import TopBar from './components/TopBar';
import ProfileHead from './components/Profile/ProfileHead';
import ProfileTabContent from './components/Profile/ProfileTabContent';
import Footer from './components/Footer';
import scrollToComponent from 'react-scroll-to-component';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1'
    };
  }

  toggleTab = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
      scrollToComponent(this.tabs, { offset: -50, align: 'top', duration: 700 });
    }
  };

  render() {
    return (
      <div className="App">
        <TopBar toggleTab={this.toggleTab} />
        <ProfileHead />
        <ProfileTabContent
          className="tabs"
          activeTab={this.state.activeTab}
          toggleTab={this.toggleTab}
          ref={section => {
            this.tabs = section;
          }}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
