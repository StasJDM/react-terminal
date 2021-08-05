import React from 'react';
import { useState } from 'react';
import TerminalInput from '../TerminalInput/TerminalInput';
import TerminalString from '../TerminalString/TerminalString';
import './style.css';

const TerminalContent = () => {
  const runCommand = (command: string) => {
    console.log('RUN>>>', command);
  };

  const onPressedEnter = () => {
    setTerminalStrings([...terminalStrings, inputValue]);
    runCommand(inputValue);
    setInputValue('');
  };

  const handleOnInputChange = (value: string) => {
    setInputValue(value);
  };

  const [terminalStrings, setTerminalStrings] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className='terminal_content'>
      {terminalStrings.map((str, index) => (
        <TerminalString value={str} key={index} />
      ))}
      <TerminalInput onPressedEnter={onPressedEnter} autoFocus value={inputValue} onChange={handleOnInputChange} />
    </div>
  );
};

export default TerminalContent;
