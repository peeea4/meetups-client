import { FC } from 'react';
import { createPortal } from 'react-dom';

type CreateMeetupModalProps = {
    children: string | JSX.Element | JSX.Element[];
};

export const ModalPortal: FC<CreateMeetupModalProps> = ({ children }) => {
    return createPortal(children, document.body);
};
