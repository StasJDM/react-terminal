import React from 'react';
import TerminalContent from './TerminalContent/TerminalContent';
import TerminalTopBar from './TerminalTopBar/TerminalTopBar';
import './style.css';

const Terminal = () => (
  <div className='terminal'>
    <TerminalTopBar />
    <TerminalContent />
  </div>
);

export default Terminal;
