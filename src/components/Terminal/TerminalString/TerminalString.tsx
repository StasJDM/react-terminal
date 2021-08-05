import React from 'react';
import TerminalGreeting from '../TerminalGreeting/TerminalGreeting';

const TerminalString = (props: { value: string; greeting?: string }) => {
  const { value, greeting } = props;
  return (
    <div>
      {greeting && <TerminalGreeting value={greeting} />}
      <span>{value}</span>
    </div>
  );
};

export default TerminalString;
