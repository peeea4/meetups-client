import styled from 'styled-components';

export const InputWrapper = styled.div`
    position: relative;
`;

export const Label = styled.div`
    position: absolute;
    top: -12px;
    left: 12px;
    padding: 0 4px;
    background-color: white;

    color: rgba(59, 29, 238, 1);
`;

export const StyledInput = styled.input`
    font-size: 18px;
    padding: 6px 12px;
    outline: 0;

    border-radius: 0;
    width: 320px;
    border: 1px solid rgba(59, 29, 238, 1);
    border-radius: 8px;
`;
