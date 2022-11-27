import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const BaseInput = styled.input`
`;

export const InputContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
`;

export const ErrorText = styled.span`
    color: ${props => props.theme.color["yellow-dark"]};
    display: block;
    padding: .75rem;
`;