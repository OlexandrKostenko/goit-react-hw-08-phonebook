import { createSlice } from "@reduxjs/toolkit";

export const filteredSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filteredContact: (state, action) => 
            (state = action.payload)
    }
});

export const { filteredContact } = filteredSlice.actions;

export const filtersReducer = filteredSlice.reducer;
