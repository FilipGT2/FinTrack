import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/loginform'; 
import Header from './components/header';

function App() {
  return (
    <div className="LoginPage">
      <Header />
        <Login />
    </div>

    
  );
}

export default App;
