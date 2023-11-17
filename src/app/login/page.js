"use client"
import Link from 'next/link'
import React from 'react'
import "./login.css"
// pages/login.js
import { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Here you can implement your authentication logic
    // For simplicity, let's just log the credentials for now
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className='mainpage'>
      <div className='bgblur'>
        <div className='logform'>
        <h1>Login</h1>
          <form onSubmit={handleLogin} >
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
