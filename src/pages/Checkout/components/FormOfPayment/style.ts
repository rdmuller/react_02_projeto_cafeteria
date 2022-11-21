import styled from "styled-components";

export const FormPaymentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 0.75rem;
`;

export const ButtonPayment = styled.button`
    display: flex;
    padding: 1rem;
    font-size: 0.75rem;
    background-color: ${porps => porps.theme.color["base-button"]};
    color: ${props => props.theme.color["base-text"]};
    gap: 0.75rem;
    border-radius: 6px;
    cursor: pointer;
    border: 0;

    :hover {
        background-color: ${props => props.theme.color["base-hover"]};
    }

    svg {
        color: ${props => props.theme.color.purple}
    }
`;