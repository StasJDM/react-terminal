import React from 'react';
import './style.css';
import { ReactComponent as ChevronSvg } from '../../assets/chevron.svg';
import { ReactComponent as MinusSvg } from '../../assets/minus.svg';
import { ReactComponent as SquareSvg } from '../../assets/square.svg';
import { ReactComponent as CrossSvg } from '../../assets/cross.svg';

const TopBar = () => (
  <div className='terminal_topbar'>
    <div className='terminal_topbar_left_container'>
      <ChevronSvg />
      terminal
    </div>
    <div className='terminal_topbar_right_container'>
      <MinusSvg className='icon-button' />
      <SquareSvg className='icon-button' />
      <CrossSvg className='icon-button' />
    </div>
  </div>
);

export default TopBar;
