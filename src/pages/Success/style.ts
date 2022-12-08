import styled from "styled-components";

export const DelliveryContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 5rem;

    h2 {
        color: ${props => props.theme.color["yellow-dark"]};
        margin-bottom: 0.25rem;
    }
`;

export const DelliveryInfoContainer = styled.div`
    > p {
        font-size: 1.25rem;
    }
`;

export const DelliveryCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2.5rem;
    padding: 2.5rem;
    border-radius: 6px 36px;
    border: 1px;
    position: relative;   
    border: solid 5px transparent;
    background: ${props => props.theme.color.white};
    background-clip: padding-box; 

    &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin: -4px;
        border-radius: inherit;
        background: linear-gradient(to right, ${props => props.theme.color.yellow}, ${props => props.theme.color.purple});
    }

    > div {
        display: flex;
        flex-direction: row;
        gap: 0.875rem;
        align-items: center;

        > div {
            display: flex;
            flex-direction: column;
        }
    }
`;
