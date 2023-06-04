import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UlGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  padding-bottom: 20px;
`;

export const LiGridItem = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${p => p.theme.colors.accent};

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  cursor: zoom-in;

  overflow: hidden;
  cursor: zoom-in;

  &:hover,
  &:focus {
    box-shadow: 0px 2px 10px 2px #1a0004;
  }
  &:hover img,
  &:focus img {
    transform: scale(1.05);
  }
  &:hover .js-overlay,
  &:focus .js-overlay {
    justify-content: center;
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const MovieLink = styled(Link)`
  display: block;
  flex-grow: 1;
`;

export const DivTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  background-color: ${p => p.theme.colors.bgdWrapper};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? 'transform: translateY(0); opacity: 1;'
    : 'transform: translateY(100%); opacity: 0;'}
`;

export const MovieTitle = styled.h3`
  text-align: center;
  padding: 4px 10px;
  font-size: 15px;
  color: ${p => p.theme.colors.white};
`;

export const TitleTrending = styled.h1`
padding: 15px;
display: flex;
justify-content: center;
align-items: center;
color: ${p => p.theme.colors.black};
text-shadow: 2px 2px 4px rgba(182, 179, 179, 0.5);
`;