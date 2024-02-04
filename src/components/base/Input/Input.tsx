import { ChangeEvent, FC } from 'react';

import { InputWrapper, Label, StyledInput } from './styles';

type InputProps = {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    label: string;
    type?: string;
    backgroundColor?: string;
    color?: string;
    borderColor?: string;
};

export const Input: FC<InputProps> = ({
    value,
    onChange,
    label,
    type = 'text',
    backgroundColor = 'white',
    color = 'rgba(59, 29, 238, 1)',
    borderColor = 'rgba(59, 29, 238, 1)',
}) => {
    return (
        <InputWrapper>
            <Label $backgroundColor={backgroundColor} $color={color}>
                {label}
            </Label>
            <StyledInput
                type={type}
                value={value}
                onChange={onChange}
                $backgroundColor={backgroundColor}
                $color={color}
                $borderColor={borderColor}
            />
        </InputWrapper>
    );
};
