import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Profile from './components/Profile';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
