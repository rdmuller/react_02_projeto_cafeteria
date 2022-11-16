import styled from "styled-components";

export const HeaderTitleContainer = styled.div`
    display: flex;
    gap: 0.5rem;

    span {
        color: ${props => props.theme.color["base-subtitle"]};
        margin-bottom: 0.125rem;
    }

    p {
        font-size: 0.875rem;
    }

    .map {
        color: ${props => props.theme.color["yellow-dark"]};
    }

    .currency {
        color: ${props => props.theme.color["purple"]};
    }
`;