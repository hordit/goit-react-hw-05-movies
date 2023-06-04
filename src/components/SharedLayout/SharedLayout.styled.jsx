import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: ${p => p.theme.colors.white};
  background-color: #000000;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const NavLinkHeader = styled(NavLink)`
 display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100%;
    color: ${props => props.theme.colors.white};
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
        color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        color:${p => p.theme.colors.backgroundColor};
    }

    &.active {
        color: ${p => p.theme.colors.backgroundColor};
        pointer-events: none;
    }
`;

export const Nav = styled.nav`
display: flex;
`