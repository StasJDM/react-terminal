import React from 'react';
import './style.css';

type TerminalGreetingProps = {
  value: string;
};

const TerminalGreeting = (props: TerminalGreetingProps) => {
  const { value } = props;
  return <span className='terminal-greeting'>{value}</span>;
};

export default TerminalGreeting;
