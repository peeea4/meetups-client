import styled from 'styled-components';

export const StyledUserCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    padding: 12px 24px;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;
    gap: 12px;
`;

export const FieldTitle = styled.div`
    display: flex;
    color: gray;
    gap: 12px;
    font-size: 14px;
`;

export const FieldValue = styled.div`
    display: flex;
    color: white;
    font-size: 18px;
    gap: 12px;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;
    border-bottom: 1px solid white;
`;
