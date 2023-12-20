import React from 'react';
import styled from 'styled-components';
// import { StyledLink } from './Link';

const StyledFooter = styled.footer `
  
  height:100px;
  background-color: #eaeaea;
  padding: 10px 112px;
  display: flex;
  justify-content: space-between;

`

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div>
        <h3>KopiKreasi.com</h3>
        <p>Copyright 2023 | All right reserved</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
