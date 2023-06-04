import styled from "styled-components";

export const H2TitleReviews = styled.h2`
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 20px;
`;

export const UlReviews = styled.ul`
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.accent};
`;

export const LiReviev = styled.li`
    color: ${({ theme }) => theme.colors.white};
    &:not(:last-child) {
        margin-bottom: 20px;
    }
`;

export const H2Autor = styled.h2`
    margin-bottom: 20px;
`;

export const AvailableInfo = styled.p`
color: ${p => p.theme.colors.white};
`;