import React from 'react';
import styled from 'styled-components';
import { StyledNavLink } from './Link';

const StyledNavbar = styled.nav `
  width: screen;
  height: 80px;
  background-color: #333;
  color: white;
  padding: 0px 112px;
  display: flex;
  justify-content: space-between;
  align-items: center;

`
const Navbar: React.FC = () => {
  return (
    <StyledNavbar>
        <h1><StyledNavLink to="/">KopiKreasi.com</StyledNavLink></h1>
        <div>
          <StyledNavLink to="/" marginLeft={20} >Home</StyledNavLink>
          <StyledNavLink to="/about" marginLeft={20} >About</StyledNavLink>
          <StyledNavLink to="/products" marginLeft={20} >Products</StyledNavLink>
          <StyledNavLink to="/login" marginLeft={20} >Login</StyledNavLink>
        </div>
    </StyledNavbar>
  );
};

export default Navbar;
