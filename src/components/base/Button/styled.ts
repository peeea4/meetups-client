import styled from 'styled-components';

export const StyledButton = styled.div<{ $disabled: boolean }>`
    font-size: 22px;
    font-weight: 300;
    padding: 6px 12px;
    width: max-content;
    background-color: rgba(59, 29, 238, 1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => (props.$disabled ? 'rgba(190, 190, 190, 1)' : 'white')};
    background-color: ${(props) =>
        props.$disabled ? 'rgba(142, 138, 180, 1)' : 'rgba(59, 29, 238, 1)'};
    position: relative;
    width: 100%;
`;

export const Spinner = styled.div`
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 1s linear infinite;
    position: absolute;
    top: calc(50% - 14px);
`;
