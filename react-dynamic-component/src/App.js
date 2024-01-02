// src/App.js

import React, { useState } from 'react';
import DynamicMessage from './DynamicMessage';
import './App.css'; // Importing the CSS file


const App = () => {
  const [message, setMessage] = useState('Welcome to the React Game!');

  const changeMessage = () => {
    const messages = [
      'You are doing great!',
      'Keep up the good work!',
      'You got this!',
      'Wow, you are amazing!',
      'You are on fire!'
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  };

  return (
    <div className="App">
      <DynamicMessage message={message} />
      <button onClick={changeMessage}>Get Motivated</button>
    </div>
  );
}

export default App;