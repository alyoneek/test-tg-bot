import React from 'react';
import Button from '../Button/Button';
import { user, onClose } from '../hooks/iseTelegram';
import './Header.css';

function Header() {
  return;
  <div className={'header'}>
    <Button onCLick={onClose}>Закрыть</Button>
    <span className={'username'}>{user?.username}</span>
  </div>;
}

export default Header;
