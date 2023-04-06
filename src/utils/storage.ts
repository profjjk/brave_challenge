import { Film } from './types';

export const getStoredFilms = (): Film[] => {
    const storedFilms = sessionStorage.getItem('swapi-films');
    if (typeof storedFilms === 'string') {
        return JSON.parse(storedFilms);
    } else {
        return [];
    }
}

export const getStoredInput = (): string => {
    const storedInput = sessionStorage.getItem('swapi-input')
    if (typeof storedInput === 'string') {
        return JSON.parse(storedInput);
    } else {
        return '';
    }
}

export const setStoredInputAndFilms = (films: Film[], input: string): void => {
    sessionStorage.setItem('swapi-films', JSON.stringify(films));
    sessionStorage.setItem('swapi-input', JSON.stringify(input));
}

export const clearStorage = (): void => sessionStorage.clear();