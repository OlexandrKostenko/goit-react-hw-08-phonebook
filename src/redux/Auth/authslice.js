import { authLoginThunk } from "./authLoginThunk";
import { authLogoutThunk } from "./authLogoutThunk";
import { authRegisterThunk } from "./authRegisterThunk";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { refreshUser } from "./authRefreshThunk";

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
            state.isLogin = true;
        }).addCase(authLoginThunk.rejected, state => {
            state.status = 'error';
        }).addCase(authRegisterThunk.pending, state => {
            state.status = 'loading';
        }).addCase(authRegisterThunk.fulfilled, (state, { payload }) => {
            state.status = 'success';
            state.data = payload;
            state.isLogin = true;
        }).addCase(authRegisterThunk.rejected, state => {
            state.status = 'error';
        }).addCase(authLogoutThunk.pending, state => {
            state.status = 'loading';
        }).addCase(authLogoutThunk.fulfilled, (state, { payload }) => {
            state.status = 'logout-success';
            state.data = null;
            state.isLogin = false;
            state.isRefresh = false;
        }).addCase(authLogoutThunk.rejected, state => {
            state.status = 'error';
        }).addCase(refreshUser.pending, state => {
            state.status = 'loading';
            state.isRefreshing = true;
        }).addCase(refreshUser.fulfilled, (state, { payload }) => {
            state.status = 'refresh-success';
            state.data.user = payload;
            state.isLogin = true;
            state.isRefreshing = false;
        }).addCase(refreshUser.rejected, state => {
            state.status = 'error';
            state.isRefreshing = false;
        })
    }
})

export const { logoutAction } = authSlice.actions;

export const authReducer = persistReducer({
  key: 'auth',
  storage,
}, authSlice.reducer);

