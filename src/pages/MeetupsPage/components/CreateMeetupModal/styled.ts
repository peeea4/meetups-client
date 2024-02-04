import styled from 'styled-components';

export const ModalWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;

    padding: 32px;

    background-color: #323031;
    width: max-content;
    border-radius: 12px;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-color: #323031;
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
`;

export const StylesMeetupsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Header = styled.div`
    background-color: #323031;
    height: max-content;
    border-bottom: 1px solid white;
    padding: 20px 40px;
    display: flex;

    justify-content: space-between;
    z-index: 1;
    width: 100%;
`;
