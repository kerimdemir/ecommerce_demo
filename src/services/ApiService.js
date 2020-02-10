/* eslint-disable camelcase */
import ajax from './AxiosService';

const API_URL = 'https://5e394071aad22200149625f8.mockapi.io';
const ApiService = function () {
    const getProducts = () => {
        return ajax.get(API_URL + '/products');
    };
    const getProductTimings = () => {
        return ajax.get(API_URL + '/productTimings');
    };

    const getHotDeals = () => {
        return ajax.get(API_URL + '/hotdeals');
    };
    return {
        getProducts,
        getHotDeals,
        getProductTimings,
    };
};

export default ApiService();
