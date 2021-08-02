import React from 'react';
import TerminalContent from '../TerminalContent/TerminalContent';
import TopBar from '../TopBar/TopBar';
import './style.css';

const Terminal = () => (
  <div className='terminal'>
    <TopBar />
    <TerminalContent />
  </div>
);

export default Terminal;
