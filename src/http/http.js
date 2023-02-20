import axios from "axios";

export const publicApi = axios.create({
    baseURL: '',
});

export const privateApi = axios.create({
    baseURL: '',
});

export const token = {
    set: (data) => {
        privateApi.defaults.headers.Authorization = `${data.token_type} ${data.access_token}`;
    },

    remove: () => {
        privateApi.defaults.headers.Authorization = null;
    },
};