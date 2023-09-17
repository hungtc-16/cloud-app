import { useState } from 'react';

export interface DiscloseType {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}

const useDisclose = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onClose = (): void => setIsOpen(false);
    const onOpen = (): void => setIsOpen(true);

    return { isOpen, onClose, onOpen };
};

export default useDisclose;
