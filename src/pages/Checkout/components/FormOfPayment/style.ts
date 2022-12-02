import styled, { css } from "styled-components";

export const FormPaymentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 0.75rem;
`;

interface ButtonPaymentProps {
    variant?: "selected" | "default";
}

export const ButtonPayment = styled.button<ButtonPaymentProps>`
    display: flex;
    padding: 1rem;
    font-size: 0.75rem;
    color: ${props => props.theme.color["base-text"]};
    gap: 0.75rem;
    border-radius: 6px;

    ${props => props.variant != "selected" && css`
        background-color: ${props => props.theme.color["base-button"]};
        cursor: pointer;
        border: 0;

        &:hover {
            background-color: ${props => props.theme.color["base-hover"]};
        }
    `}

    ${props => props.variant === "selected" && css`
        background-color: ${props => props.theme.color["purple-light"]};
        border: 1px solid ${props => props.theme.color["purple"]};
    `}

    svg {
        color: ${props => props.theme.color.purple}
    }

`;