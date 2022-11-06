import styled from "styled-components";

export const ProductCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    img {
        width: 4rem;
        height: 4rem;
    }

    hr {
        color: ${props => props.theme.color["base-button"]};
        border: 1px solid;
    }
`;

export const LabelPrice = styled.span`
    font-weight: 700;

    ::before {
        content: "R$ ";
    }
`;