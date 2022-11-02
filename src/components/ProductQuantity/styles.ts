import styled from "styled-components";

export const ProductQuantityContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 6px;
    background-color: ${props => props.theme.color["base-button"]};
    gap: 0.25rem;
    height: 2.375rem;
    padding: 0.5rem;
    width: min-content;

    span {
        color: ${props => props.theme.color["base-title"]};
        display: flex;
        min-width: 1.2rem;
        justify-content: center;
    }
    
    button {
        color: ${props => props.theme.color["purple"]};
        background-color: transparent;
        border: 0;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button:hover {
        color: ${props => props.theme.color["purple-dark"]};
    }

`;