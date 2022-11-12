import styled from "styled-components";

const BaseCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    gap: 1.5rem;
    background-color: ${props => props.theme.color["base-card"]};
    width: auto;
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
    min-width: 28rem;
`;

export const SummaryContainer = styled(BaseCard)`
    border-radius: 6px 44px;
`;

export const RequestContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 40rem;
`;

export const AddressContainer = styled(BaseCard)`

`;

export const SummaryTotals = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.75rem;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
`;

export const LabelSummary = styled.span`
    font-size: 0.875rem;
`;

export const LabelTotalSummary = styled.span`
    font-size: 1.25rem;
    font-weight: 700;
    color: ${props => props.theme.color["base-subtitle"]};
`;

export const ButtonConfirm = styled.button`
    margin-top: 0.75rem;
    background-color: ${props => props.theme.color.yellow};
    color: ${props => props.theme.color.white};
    border-radius: 6px;
    border: 0;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    :hover {
        background-color: ${props => props.theme.color["yellow-dark"]};
    }
`;