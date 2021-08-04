import React from 'react';
import { useState } from 'react';
import TerminalInput from '../TerminalInput/TerminalInput';
import './style.css';

const TerminalContent = () => {
  const onPressedEnter = () => {
    const oldTerminalStrings = terminalStrings;
    if (oldTerminalStrings.length) {
      oldTerminalStrings[oldTerminalStrings.length - 1].disabled = true;
    }
    setTerminalStrings([...oldTerminalStrings, { text: '', disabled: false }]);
  };

  const [terminalStrings, setTerminalStrings] = useState<{ text: string; disabled: boolean }[]>([
    { text: '', disabled: false },
  ]);

  return (
    <div className='terminal_content'>
      {terminalStrings.map((terminalString, index) => (
        <TerminalInput
          onPressedEnter={onPressedEnter}
          value={terminalString.text}
          key={index}
          disabled={terminalString.disabled}
        />
      ))}
    </div>
  );
};

export default TerminalContent;
