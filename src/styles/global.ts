import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.color["background"]};
    }
    
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        font-style: normal;
        line-height: 1.3;
        color: ${props => props.theme.color["base-text"]};
        -webkit-font-smoothing: antialiased;
    }

    input {
        padding: 0.75rem;
        border-radius: 4px;
        border: 1px solid ${props => props.theme.color["base-button"]};
        color: ${props => props.theme.color["base-text"]};
        font-size: 0.875rem;
    }

    input:focus {
        outline: 0px;
        box-shadow: 0 0 0 1px ${props => props.theme.color["yellow-dark"]};
    }

    input::placeholder {
        color: ${props => props.theme.color["base-label"]};
    }

    h1, h2, h3, h4 {
        font-family: 'Baloo 2';
        line-height: 1.3;
        font-style: normal;
    }

    h1 {
        font-size: 3rem;
        font-weight: 800;
        color: ${props => props.theme.color["base-title"]}
    }

    h2 {
        font-size: 2rem;
        font-weight: 800;
        color: ${props => props.theme.color["base-subtitle"]}
    }

    h3 {
        font-size: 1.25rem;
        font-weight: 700;
    }

    h4 {
        font-size: 1.125rem;
        font-weight: 700;
    }
`;