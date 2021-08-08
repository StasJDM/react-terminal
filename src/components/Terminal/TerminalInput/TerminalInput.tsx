import React, { KeyboardEvent } from 'react';
import TerminalGreeting from '../TerminalGreeting/TerminalGreeting';
import './style.css';

type TerminalInputProps = {
  value: string;
  greeting: string;
  autoFocus?: boolean;
  onChange: (value: string) => void;
  onPressedEnter: () => void;
};

const TerminalInput = React.forwardRef<HTMLInputElement, TerminalInputProps>((props: TerminalInputProps, ref) => {
  const { value, greeting, autoFocus, onChange, onPressedEnter } = props;

  const handleOnKeyDownEnter = (event: KeyboardEvent): void => {
    if (event.code === 'Enter') {
      onPressedEnter();
    }
  };

  const handleOnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className='terminal-input-container'>
      <TerminalGreeting value={greeting} />
      <input
        ref={ref}
        className='terminal-input'
        onKeyDown={handleOnKeyDownEnter}
        onChange={handleOnInputChange}
        value={value}
        autoFocus={autoFocus}
      />
    </div>
  );
});

export default TerminalInput;
