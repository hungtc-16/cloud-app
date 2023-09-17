import { FC } from 'react';
import BaseException from './BaseException';

const NotFound: FC = () => {
    return (
        <BaseException
            status={404}
            title="Oops! Page Not Be Found"
            message="Sorry but the page you are looking for does not exist, have been removed. name
                    changed or is temporarily unavailable."
        />
    );
};

export default NotFound;
