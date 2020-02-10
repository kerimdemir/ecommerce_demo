import axios from 'axios';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const AxiosService = function () {
    let AuthorizationToken = '';

    function addHeaders(userConfig) {
        const globalHeaders = {};
        globalHeaders.Authorization = AuthorizationToken;
        const {headers} = userConfig;
        return {
            headers: {
                ...globalHeaders,
                ...headers,
            },
        };
    }

    // Set authorization token
    function setAuthorizationToken(token) {
        AuthorizationToken = token;
    }

    // GET method
    function get(endPoint, userConfig = {}) {
        return axios.get(endPoint, addHeaders(userConfig));
    }

    // POST method
    function post(endPoint, params = {}, userConfig = {}) {
        return axios.post(endPoint, params, addHeaders(userConfig));
    }

    // Patch method
    function patch(endPoint, params = {}, userConfig = {}) {
        return axios.patch(endPoint, params, addHeaders(userConfig));
    }

    function put(endPoint, params = {}, userConfig = {}) {
        return axios.put(endPoint, params, addHeaders(userConfig));
    }

    function del(endPoint, userConfig = {}) {
        return axios.delete(endPoint, addHeaders(userConfig));
    }

    return {
        setAuthorizationToken,
        get,
        post,
        put,
        patch,
        del,
    };
};

// let's return back our create method as the default.
export default AxiosService();
