import React, { useEffect } from 'react';
import { useState } from 'react';
import { GREETING } from '../../../constants/greeting';
import { CommandsComntroller } from '../../../controllers/commands';
import TerminalInput from '../TerminalInput/TerminalInput';
import TerminalString from '../TerminalString/TerminalString';
import './style.css';

const TerminalContent = () => {
  const [terminalStrings, setTerminalStrings] = useState<{ value: string; greeting?: string }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [activeCommand, setActiveCommand] = useState('');

  useEffect(() => {
    const result = CommandsComntroller.runCommand(activeCommand);
    if (result) {
      setTerminalStrings((state) => [...state, { value: result }]);
    }
  }, [activeCommand]);

  const onPressedEnter = () => {
    setTerminalStrings([...terminalStrings, { value: inputValue, greeting: GREETING }]);
    setActiveCommand(inputValue);
    setInputValue('');
  };

  const handleOnInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <div className='terminal_content'>
      {terminalStrings.map((ts, index) => (
        <TerminalString value={ts.value} greeting={ts.greeting} key={index} />
      ))}
      <TerminalInput
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
