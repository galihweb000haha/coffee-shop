import React from 'react';
import styled from 'styled-components';

interface StyledHeaderProps {
  type?: string;
}

const StyledHeader = styled.div<StyledHeaderProps>`
  width: 100%;
  height: 140px;
  border: 1px solid #000;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${process.env.PUBLIC_URL}/img/mike-kenneally-TD4DBagg2wE-unsplash.jpg); /* Menggunakan process.env.PUBLIC_URL */
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  z-index: 0;
  padding: 0 112px;

`
interface HeaderProps {
  title: string;
}
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <StyledHeader>
        <h1>{props.title}</h1>
    </StyledHeader>
  );
};

export default Header;
