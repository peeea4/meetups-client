import { useCallback, useState } from 'react';

export const useShowModal = (): [boolean, () => void, () => void] => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = useCallback(() => {
        setIsModalVisible(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsModalVisible(false);
    }, []);

    return [isModalVisible, openModal, closeModal];
};
