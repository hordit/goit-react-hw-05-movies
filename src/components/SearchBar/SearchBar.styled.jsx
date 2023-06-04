import styled from "styled-components";

export const SearchForm = styled.form`
display: flex;
margin: 20px auto;
-webkit-box-align: center;
align-items: center;
width: 100%;
max-width: 400px;
background-color: ${p => p.theme.colors.white};
border-radius: 3px;
overflow: hidden;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 16px;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
  &:placeholder {
    font: inherit;
    font-size: 14px;
  }
`;

export const ButtonSubmit = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 0;
  color: #626262;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;