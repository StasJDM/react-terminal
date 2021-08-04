import React, { KeyboardEvent, useState } from 'react';
import './style.css';

type TerminalInputProps = {
  value: string;
  disabled: boolean;
  onPressedEnter: () => void;
};

const TerminalInput = ({ value, disabled, onPressedEnter }: TerminalInputProps) => {
  const [inputValue, setInputValue] = useState<string>(value);

  const handleOnKeyDownEnter = (event: KeyboardEvent): void => {
    if (event.code === 'Enter') {
      onPressedEnter();
    }
  };

  const handleOnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='terminal-input-container'>
      <span className='terminal-greeting'>stas:&gt;</span>
      {disabled || (
        <input
          className='terminal-input'
          onKeyDown={handleOnKeyDownEnter}
          onChange={handleOnInputChange}
          value={inputValue}
          autoFocus
        />
      )}
      {!disabled || <span>{inputValue}</span>}
    </div>
  );
};

export default TerminalInput;
