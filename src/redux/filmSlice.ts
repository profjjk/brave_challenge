import { createSlice } from '@reduxjs/toolkit';

export const filmSlice = createSlice({
    name: 'film',
    initialState: {
        film: {}
    },
    reducers: {
        update: (state, action) => {
            state.film = action.payload
        }
    }
});

export const { update } = filmSlice.actions;

export const selectFilm = (state: any) => state.film;

export default filmSlice.reducer;