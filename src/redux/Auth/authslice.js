import { authLoginThunk } from "./authLoginThunk";

const { createSlice } = require("@reduxjs/toolkit");
const { authInitState } = require("./auth.init-state");


const authSlice = createSlice({
    name: 'auth',
    initialState: authInitState,
    reducers: {
        logoutAction: () => authInitState,
    },
    extraReducers: builder => {
        builder.addCase(authLoginThunk.pending, state => {
            state.status = 'loading';
        }).addCase(authLoginThunk.fulfilled, (state, { payload }) => {
            state.status = 'success';
            state.data = payload;
        }).addCase(authLoginThunk.rejected, state => {
            state.status = 'error'
        })
    }
})

export const { logoutAction } = authSlice.actions;

