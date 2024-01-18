import { FC } from 'react';

import { StyledButton } from './styled';

type ButtonProps = {
    children: string | JSX.Element | JSX.Element[];
    onClick: () => void;
    disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({ children, onClick, disabled }) => {
    const clickHandler = () => {
        if (!disabled) {
            onClick();
        }
    };
    return <StyledButton onClick={clickHandler}>{children}</StyledButton>;
};
