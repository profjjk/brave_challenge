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

// export dispatch action
export const { update } = filmSlice.actions;
// export state (since there is only one value to track)
export const selectFilm = (state: any) => state.film;
// export reducer to use in store
export default filmSlice.reducer;