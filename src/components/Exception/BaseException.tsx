import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './Exception.scss';

interface BaseExceptionProps {
    status: number;
    title?: string;
    message?: string;
}

const BaseException: FC<BaseExceptionProps> = ({ status, title, message }) => {
    const navigate = useNavigate();
    const titlePage = title || 'Error';

    return (
        <div id="exception">
            <div className="exception">
                {
                    status > 0 && <h1>{status}</h1>
                }
                <h2>{title}</h2>
                <p>{message}</p>
                <a className="cursor-pointer">
                    Back to homepage
                </a>
            </div>
        </div>
    );
};

export default BaseException;
