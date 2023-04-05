import { axiosInstance as api } from '../lib/axiosInstance';

// This API object can be easily scaled up to allow for other HTTP requests should they be needed.
export const API = {
    getFilms(title: string) {
        return api.get(`/films/?search=${title}`);
    }
}