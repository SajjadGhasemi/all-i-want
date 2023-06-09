"use client";

import { createSlice } from "@reduxjs/toolkit";

interface InitialStateTypes {
    darkToggle: boolean;
}

const initialState: InitialStateTypes = {
    darkToggle: false,
};

const themeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        toggleTheme(state, action) {
            state.darkToggle = action.payload;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
