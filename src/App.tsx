import React from 'react';
import './App.css';
import Terminal from './components/Terminal/Terminal';

function App() {
  return (
    <div className='App'>
      <div className='main-label'>
        <div>Hi guys</div>
        <div>It is terminal on HTML + CSS + React</div>
      </div>
      <Terminal />
    </div>
  );
}

export default App;
