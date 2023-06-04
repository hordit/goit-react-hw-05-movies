import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 30px;
`;

export const H4 = styled.h4`
  font-weight: bold;
`;

export const LiAdditional = styled.li`
  display: block;
  padding: 10px 0;
  margin: 0 20px 20px 20px;
  border-radius: 2px;
  background-color: ${p => p.theme.colors.black};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: ${p => p.theme.colors.white};
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 20px;
  font-weight: 700;
  min-width: 150px;
  border-radius: 4px;
`;

export const NavLinkAdditional = styled(NavLink)`
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.backgroundColor};
  }

  &.active {
    color: ${p => p.theme.colors.backgroundColor};
    pointer-events: none;
  }
`;
