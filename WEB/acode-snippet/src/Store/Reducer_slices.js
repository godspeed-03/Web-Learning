import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    thememode: true,
};

export const themeSlice = createSlice({
    name: 'themeSwitcher',
    initialState,
    reducers: {
        switchTheme: (state, action) => {
            state.thememode = action.payload;
        },
        
    }
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
