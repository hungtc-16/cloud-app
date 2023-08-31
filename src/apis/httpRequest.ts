import axios, { AxiosError, AxiosResponse } from 'axios';

// axios config
const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 300000,
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    },
});

// axios interceptors request
httpRequest.interceptors.request.use(
    (config) => {
        //get values from session storage
        const customerID = sessionStorage.getItem('customerID');
        const configId = sessionStorage.getItem('configID');
        if (customerID) {
            config.headers['MckID'] = customerID;
        }
        if (configId) {
            config.headers['configID'] = configId;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

// axios interceptors response
httpRequest.interceptors.response.use(
    async (res) => {
        return res;
    },
    async (error) => {
        // when the network connection is lost or the server is down
        if (!error?.response || !error.response?.status) {
            // if (window.location.pathname !== configs.routes.login) {
            //     window.location.href = configs.routes.error;
            // }
        } else {
            const prevRequest = error.config;
            const statusCode = error.response.status;

            // switch (statusCode) {
            //     case 401: {
            //         try {
            //             await refreshTokenApi().catch((error: AxiosError) => {
            //                 if (error.response.status === 400) {
            //                     window.location.href = configs.routes.login;
            //                 }
            //             });
            //             return httpRequest(prevRequest);
            //         } catch (error) {
            //             return Promise.reject(error);
            //         }
            //     }
            //     case 403: {
            //         if (window.location.pathname !== configs.routes.login) {
            //             cleanUpStorage();
            //             window.location.href = configs.routes.login;
            //         }
            //     }
            // }
        }
        return Promise.reject(error);
    },
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

// method get
export const get = async <T>(url: string, options: any = {}): Promise<T> => {
    return await httpRequest.get<T>(url, options).then(responseBody);
};

// method post
export const post = async <T>(url: string, options: any = {}): Promise<T> => {
    return await httpRequest.post<T>(url, options).then(responseBody);
};

// method delete
export const destroy = async <T>(url: string, options: any = {}): Promise<T> => {
    return await httpRequest.delete<T>(url, options).then(responseBody);
};

// method put
export const put = async <T>(url: string, options: any = {}): Promise<T> => {
    return await httpRequest.put<T>(url, options).then(responseBody);
};

// method patch
export const patch = async <T>(url: string, options: any = {}): Promise<T> => {
    return await httpRequest.patch<T>(url, options).then(responseBody);
};

// method patch
export const upload = async <T>(url: string, options: FormData): Promise<T> => {
    return await httpRequest
        .post<T>(url, options, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(responseBody);
};
