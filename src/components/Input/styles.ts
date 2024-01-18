import styled from 'styled-components';

export const InputWrapper = styled.div`
    position: relative;
`;

export const Label = styled.div<{
    $backgroundColor: string;
    $color: string;
}>`
    position: absolute;
    top: -12px;
    left: 12px;
    padding: 0 4px;
    background-color: ${(props) => props.$backgroundColor};
    color: ${(props) => props.$color};
`;

export const StyledInput = styled.input<{
    $backgroundColor: string;
    $color: string;
    $borderColor: string;
}>`
    font-size: 18px;
    padding: 6px 12px;
    outline: 0;
    border-radius: 0;
    width: 320px;
    border-radius: 8px;
    background-color: ${(props) => props.$backgroundColor};
    color: ${(props) => props.$color};
    border: ${(props) => `1px solid ${props.$borderColor}`};
`;
