import { useRouteError } from "react-router-dom";
import { BaseException } from "../Exception";

const ErrorElement = () => {
    const error: any = useRouteError();

    switch (error?.name) {
        case "ChunkLoadError": {
            break;
        }
        case "Error": {
            break;
        }
    }

    return <BaseException
        status={-100}
        title={error?.name}
        message={error?.message}
    />

};
export default ErrorElement;