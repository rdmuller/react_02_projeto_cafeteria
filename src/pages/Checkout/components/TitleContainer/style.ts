import styled from "styled-components";

export const HeaderTitleContainer = styled.div`
    span {
        color: ${props => props.theme.color["base-subtitle"]};
        margin-bottom: 0.125rem;
    }

    p {
        font-size: 0.875rem;
    }
`;