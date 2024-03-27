import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/loginForm';
import Register from './components/registerForm'; 
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import Favicon from './favicon.svg';
import Dashboard from './components/dashboard';


function App() {
  return (
    <div className="LoginPage"> 
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Header />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
