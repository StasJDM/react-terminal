import React from 'react';
import './style.css';
import { GREETING } from '../../constants/greeting';

const Greeting = () => <span className='terminal-greeting'>{GREETING}</span>;

export default Greeting;
