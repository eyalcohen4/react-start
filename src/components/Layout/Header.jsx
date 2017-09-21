import React from 'react';
import { Link } from 'react-router-dom';

import NavPanel from './NavPanel';
import NavItem from './NavItem';

const Header = () => (
  <header>
    <NavPanel>
      <NavItem>
        <Link to="/home"> Home </Link>
      </NavItem>
      <NavItem>
        <Link to="/about"> About </Link>
      </NavItem>
    </NavPanel>
  </header>
);

export default Header;
