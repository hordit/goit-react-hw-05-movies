import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonBack = styled(NavLink)`
  display: inline-block;
  padding: 10px 30px;
  margin-top: 20px;
  border-radius: 2px;
  background-color: ${p => p.theme.colors.black};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${p => p.theme.colors.white};
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 15px;
  font-weight: 700;
  min-width: 160px;
  border-radius: 4px;
  &:hover {
    color: ${p => p.theme.colors.backgroundColor};
  }
`;

export const Arrow = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const DivButtonBack = styled.div`
  margin-left: 30px;
`;
