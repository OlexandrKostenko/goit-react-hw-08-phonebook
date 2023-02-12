import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";



export const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
})
    /*reducers: {
        addContactAction: (state, action) => [...state, action.payload],
        removeContactAction: (state, action) => {
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        }
    }
});

export const { addContactAction, removeContactAction } = contactSlice.actions;*/


export const contactReducer = contactSlice.reducer;