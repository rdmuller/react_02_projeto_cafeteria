import styled from "styled-components";

export const ProductContainer = styled.div`
    width: 16rem;
    height: 19.375rem;
    background-color: ${props => props.theme.color["base-card"]};
    border-radius: 6px 36px;
    display: flex;
    flex-direction: column;

    img {
        width: 7.5rem;
        height: 7.5rem;
        top: -1.25rem;
    }
`;