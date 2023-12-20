import styled from 'styled-components';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface StyledNavLinkProps extends NavLinkProps {
  marginRight?: number;
  marginLeft?: number;
}

export const StyledNavLink = styled(NavLink)<StyledNavLinkProps>`
  color: white;
  text-decoration: none;
  margin-right: ${({ marginRight }) => marginRight && `${marginRight}px`};
  margin-left: ${({ marginLeft }) => marginLeft && `${marginLeft}px`};
  &:hover {
    color: #ddd;
  }

`;
