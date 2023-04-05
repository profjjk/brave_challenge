import axios, { AxiosInstance } from 'axios';

let baseUrl = 'https://swapi.dev/api';

const config = { baseURL: baseUrl };

export const axiosInstance: AxiosInstance = axios.create(config);