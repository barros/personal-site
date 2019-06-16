import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TopBar } from './components/TopBar';
import { Profile } from './components/Profile';
import { Footer } from './components/Footer';

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
