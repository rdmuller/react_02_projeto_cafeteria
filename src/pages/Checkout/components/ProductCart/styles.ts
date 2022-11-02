import styled from "styled-components";

export const ProductCartContainer = styled.div`
    display: flex;
    flex-direction: row;

    img {
        width: 4rem;
        height: 4rem;
    }
`;

export const LabelPrice = styled.span`
    font-weight: 700;

    ::before {
        content: "R$ ";
    }
`;