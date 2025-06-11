import React from 'react';
import Logo from '../../assets/logo.png';
import { MainHeader } from './styles';

function Header() {
  return (
    <MainHeader>
        <img src={Logo} alt="logo-dev-movies" style={{ width: 500 }} />
    </MainHeader>
  )
}

export default Header;