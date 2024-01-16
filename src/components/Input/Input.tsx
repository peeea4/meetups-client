import { ChangeEvent, FC } from 'react';

import { InputWrapper, Label, StyledInput } from './styles';

type InputProps = {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    label: string;
    type?: string;
};

export const Input: FC<InputProps> = ({
    value,
    onChange,
    label,
    type = 'text',
}) => {
    return (
        <InputWrapper>
            <Label>{label}</Label>
            <StyledInput type={type} value={value} onChange={onChange} />
        </InputWrapper>
    );
};
