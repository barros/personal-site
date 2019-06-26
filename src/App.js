import React from 'react';
import './Presentational/App.css';
import TopBar from './components/TopBar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: '1'
    };
  }
  
  toggleTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="App">
        <TopBar toggleTab={this.toggleTab}/>
        <Profile activeTab={this.state.activeTab} toggleTab={this.toggleTab}/>
        <Footer />
      </div>
    );
  }
}

export default App;
