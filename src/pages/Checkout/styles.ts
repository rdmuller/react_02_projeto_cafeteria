import styled from "styled-components";

const BaseCard = styled.div`
    background-color: ${props => props.theme.color["base-card"]};
    padding: 40px;
`;

export const MainContainer = styled.main`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: space-between;
`;

export const CofeeCardContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RequestContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AddressContainer = styled(BaseCard)`

`;