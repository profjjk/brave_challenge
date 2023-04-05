import axios, { AxiosInstance } from 'axios';

let baseUrl = 'https://swapi.dev/api';

const config = { baseURL: baseUrl };

// configure axios instance to use baseUrl for swapi.dev
export const axiosInstance: AxiosInstance = axios.create(config);