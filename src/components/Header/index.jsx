import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { MainHeader, Menu, Li } from './styles';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 150);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <MainHeader scrolled={scrolled}>
      <img src={Logo} alt="logo-dev-movies"/>
      <Menu>
        <Li>
          <Link to="/">Home</Link>
        </Li>
        <Li>
          <Link to="/movies">Filmes</Link>
        </Li>
        <Li>
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </MainHeader>
  );
}

export default Header;