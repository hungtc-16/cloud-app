import { toast } from 'react-toastify';

// notification success
export const success = (message: string) => {
    toast.success(message, {
        theme: 'colored',
    });
};

// notification error
export const error = (message: string) => {
    toast.error(message, {
        theme: 'colored',
    });
};

// notification warn
export const warn = (message: string) => {
    toast.warn(message, {
        theme: 'colored',
    });
};

// notification info
export const info = (message: string) => {
    toast.info(message, {
        theme: 'colored',
    });
};
