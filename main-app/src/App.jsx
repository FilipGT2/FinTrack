import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/loginForm'; 
import Header from './components/header';
import Favicon from './favicon.svg';

function App() {
  return (
    <div className="LoginPage">
      <Header />
        <Login />
    </div>

    
  );
}

export default App;
