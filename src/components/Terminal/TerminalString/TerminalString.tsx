import React from 'react';
import TerminalGreeting from '../TerminalGreeting/TerminalGreeting';

const TerminalString = ({ value }: { value: string }) => (
  <div>
    <TerminalGreeting />
    <span>{value}</span>
  </div>
);

export default TerminalString;
