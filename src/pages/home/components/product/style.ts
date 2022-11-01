import styled from "styled-components";

export const ProductContainer = styled.div`
    width: 16rem;
    height: 19.375rem;
    background-color: ${props => props.theme.color["base-card"]};
    border-radius: 6px 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1.25rem;

    img {
        width: 7.5rem;
        height: 7.5rem;
        margin-top: -1.25rem;
        margin-bottom: 0.75rem;
    }

    h4 {
        margin-top: 1rem;
        margin-bottom: 0.5rem;
    }

`;

export const ProductTags = styled.div`
    display: flex;
    gap: 0.25rem; 
    flex-direction: row;
    flex-wrap: wrap;

    span {
        background-color: ${props => props.theme.color["yellow-light"]};
        color: ${props => props.theme.color["yellow-dark"]};
        font-size: 0.625rem;
        padding: 4px 8px;
        border-radius: 100px;
    }
`;

export const ProductDescription = styled.p`
    font-size: 0.875rem;
    color: ${props => props.theme.color["base-label"]};
    text-align: center;
`;

export const ProductFooter = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`;

export const ProductPrice = styled.span`
    font-size: 1.5rem;
    font-family: ${props => props.theme.font.title};
    font-weight: 800;

    ::before {
        content: "R$ ";
        font-size: 0.875rem;
        font-family: ${props => props.theme.font.body};
    }
`;

export const ProductBuy = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;

    div {
        align-items: center;
        border-radius: 6px;
        background-color: ${props => props.theme.color["base-button"]};
        display: flex;
        gap: 0.25rem;
        flex-direction: row;
        height: 2.375rem;
        padding: 0.5rem;

        span {
            color: ${props => props.theme.color["base-title"]};
        }
    }

    button {
        border: 0;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ButtonQuanttity {
        color: ${props => props.theme.color["purple"]};
        background-color: transparent;
    }

    .ButtonQuanttity:hover {
        color: ${props => props.theme.color["purple-dark"]};
    }

    .ButtonBuy {
        border-radius: 6px;
        width: 2.375rem;
        height: 2.375rem;
        background-color: ${props => props.theme.color["purple-dark"]};
        color: ${props => props.theme.color["base-card"]}
    }

    .ButtonBuy:hover {
        background-color: ${props => props.theme.color["purple"]};
    }
`;