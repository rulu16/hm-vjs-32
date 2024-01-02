// src/DynamicMessage.js

import React from 'react';
import './DynamicMessage.css'; // Importing the CSS file

const DynamicMessage = ({ message }) => {
    return <div className="dynamic-message">{message}</div>;
}

export default DynamicMessage;
