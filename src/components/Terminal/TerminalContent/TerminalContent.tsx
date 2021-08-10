import React, { createRef, useEffect } from 'react';
import { useState } from 'react';
import { GREETING } from '../../../constants/greeting';
import { CommandsComntroller } from '../../../commands/controllers/commands';
import TerminalInput from '../TerminalInput/TerminalInput';
import TerminalString from '../TerminalString/TerminalString';
import './style.css';

const TerminalContent = () => {
  const [terminalStrings, setTerminalStrings] = useState<{ value: string; greeting?: string }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [activeCommand, setActiveCommand] = useState<{ command: string }>({ command: '' });

  const inputRef = createRef<HTMLInputElement>();

  useEffect(() => {
    const result = CommandsComntroller.runCommand(activeCommand.command);
    if (result) {
      setTerminalStrings((state) => [...state, { value: result }]);
    }
  }, [activeCommand]);

  const onPressedEnter = () => {
    setTerminalStrings([...terminalStrings, { value: inputValue, greeting: GREETING }]);
    setActiveCommand({ command: inputValue });
    setInputValue('');
  };

  const handleOnInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleOnClickTerminalContent = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className='terminal-content' onClick={handleOnClickTerminalContent}>
      {terminalStrings.map((ts, index) => (
        <TerminalString value={ts.value} greeting={ts.greeting} key={index} />
      ))}
      <TerminalInput
        ref={inputRef}
        onPressedEnter={onPressedEnter}
        value={inputValue}
        greeting={GREETING}
        onChange={handleOnInputChange}
        autoFocus={true}
      />
    </div>
  );
};

export default TerminalContent;
