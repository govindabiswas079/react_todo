import axios from 'axios';

export const Api = () => {
    const AXIOS = axios.create({
        baseURL: 'https://sweede.app/DeliveryBoy',
    });

    AXIOS.interceptors.request.use(function (config) {
        try {
            config.headers.Accept = "application/json, text/plain, */*";
            config.headers["Content-Type"] = 'application/json';
            config.headers["content-type"] = 'application/json';

            return config;
        } catch (error) {
            console.log('errorerror', error)
            return Promise.reject(error);
        }
    })

    AXIOS.interceptors.response.use(function (response) {
        try {
            return response?.data;
        } catch (error) {
            return Promise.reject(error);
        }
    })

    return AXIOS;
};