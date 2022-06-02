import axios from "axios";

export const api = {
    get: async (path, config = {}) => {
        return axios.get(process.env.REACT_APP_API_BASEURL + path, config);
    }
};