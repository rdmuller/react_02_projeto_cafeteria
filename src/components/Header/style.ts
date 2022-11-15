import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;

    img {
        width: 5.3rem;
        height: 2.5rem;
    }

    nav {
        display: flex;
        gap: 0.75rem;
        
        a {
            text-decoration: none;
        }
    }
`;

const BaseButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    border: 0;
    border-radius: 6px;
    padding: 0.5rem;
    height: 2.375rem;
    gap: 0.25rem; 

    font-weight: 400;
    font-size: 0.875rem;
`;

export const ButtonLocation = styled(BaseButton)`
    background-color: ${(props) => props.theme.color["purple-light"]};
    color: ${(props) => props.theme.color["purple-dark"]};
`;

export const ButtonCart = styled(BaseButton)`
    background-color: ${(props) => props.theme.color["yellow-light"]};
    color: ${(props) => props.theme.color["yellow-dark"]};
`;

export const ProductQtyContainer = styled.span`
    display: flex;
    font-size: 0.75rem;
    font-weight: 700;
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color["yellow-dark"]};
    border-radius: 50%;
    height: 1.25rem;
    width: 1.25rem;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: calc(-1rem * 2);
    margin-left: calc(1rem * 2);
`;