import styled from "styled-components";

export const SectionContainer = styled.section`
    display: flex;
    flex-direction: row;
    gap: 3.5rem;
    padding-bottom: 6.75rem;
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    span {
        font-size: 1.25rem;
        color: ${props => props.theme.color["base-subtitle"]};
    }
`;

export const ItemsContainer = styled.div`
    display: flex;
    margin-top: 4.125rem;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1.25rem;

    > div {
        display: flex;
        gap: 0.75rem;
        align-items: center;
        min-width: 15rem;
    }
`;