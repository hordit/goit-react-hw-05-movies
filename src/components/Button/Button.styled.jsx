import styled from 'styled-components';

export const DivContainer = styled.div`
display: flex;
`;

export const ButtonLoadMore = styled.button`
  display: block;
  padding: 10px 30px;
  margin: 0 auto 20px auto;
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
  min-width: 180px;
  border-radius: 4px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    color:${p => p.theme.colors.backgroundColor};
  }
`;
