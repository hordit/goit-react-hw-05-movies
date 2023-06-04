import styled from "styled-components";

export const H2TitleCast = styled.h2`
    color: ${p => p.theme.colors.white};
    margin-bottom: 20px;
`;

export const UlCast = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 20px;
`;

export const LiCast = styled.li`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 10px;
    align-items: center;
    color: ${p => p.theme.colors.white};
    background-color:${p => p.theme.colors.black};
    & p {
        padding: 0 5px;
        line-height: 1.3;
        text-align: center;
    }
    & p:last-child {
        margin-top: auto;
    }
`;

export const ImgCast = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: top;
    aspect-ratio: 3 / 4;
`;

export const AvailableInfo = styled.p`
color: ${p => p.theme.colors.white};
`;