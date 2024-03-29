import styled from 'styled-components';

export const PageWrapper = styled.div`
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #323031;
    min-height: 100vh;
`;

export const AuthBlockWrapper = styled.div`
    padding: 32px;
    background-color: white;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const TabListWrapper = styled.div`
    display: flex;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    gap: 32px;
`;

export const TabWrapper = styled.div<{ $isActive?: boolean }>`
    font-size: 24px;
    font-weight: 500;
    color: ${(props) =>
        props.$isActive ? 'rgba(59, 29, 238, 1)' : 'rgba(59, 29, 238, 0.5)'};
    cursor: pointer;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`;
