import { createSlice } from "@reduxjs/toolkit";

export const contactsInitState = {
  contact: [],
}


export const contactSlice = createSlice({
    name: 'contact',
    initialState: [],
    reducers: {
        addContactAction: (state, action) => [...state, action.payload],
        removeContactAction: (state, action) => {
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        }
    }
});

export const { addContactAction, removeContactAction } = contactSlice.actions;


export const contactReducer = contactSlice.reducer;