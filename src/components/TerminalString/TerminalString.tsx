import React from 'react';
import Greeting from '../Greeting/Greeting';

const TerminalString = ({ value }: { value: string }) => (
  <div>
    <Greeting />
    <span>{value}</span>
  </div>
);

export default TerminalString;
