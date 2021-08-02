import React from 'react';
import './style.css';

const TerminalInput = () => (
  <div className='terminal-input-container'>
    <span className='terminal-greeting'>stas:&gt;</span>
    <input className='terminal-input' autoFocus />
  </div>
);

export default TerminalInput;
