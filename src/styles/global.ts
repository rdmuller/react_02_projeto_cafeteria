import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {

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
        color: ${props => props.theme.color["base-text"]}
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