import styled from 'styled-components';

export const DivContainerDetails = styled.div`
  width: 100%;
  padding: 0 20px;
  margin: auto;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    width: ${props => props.theme.breakpoints.s};
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    width: ${props => props.theme.breakpoints.m};
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    width: ${props => props.theme.breakpoints.l};
  }
`;

export const DivContainer = styled.div`
padding: 30px;
    @media (min-width: ${props => props.theme.breakpoints.xs}) {
        display: flex;
    }
`;

export const ImgDetails = styled.img`
  flex-shrink: 0;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    min-width: 30%;
    margin: 0;
  }
`;

export const DivDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0 0 0;
  color: ${p => p.theme.colors.black};
  gap: 20px;
  @media (min-width: ${props => props.theme.breakpoints.xs}) {
    padding: 0 0 0 20px;
  }
`;
