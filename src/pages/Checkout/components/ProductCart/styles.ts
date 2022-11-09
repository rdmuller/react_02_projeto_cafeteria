import styled from "styled-components";

export const ProductCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 23rem;
    gap: 1.5rem;

    img {
        display: flex;
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

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.25rem;
    width: 100%;
`;

export const ProductData = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1.25rem;
`;

export const ProductName = styled.div`
    margin-bottom: 0.5rem;
`;