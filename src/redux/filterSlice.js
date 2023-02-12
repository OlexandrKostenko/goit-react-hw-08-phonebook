import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: '',
}

export const filteredSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filteredContact: (state, action) => { state.filter = action.payload },
    },
});

export const { filteredContact } = filteredSlice.actions;

export const filtersReducer = filteredSlice.reducer;
