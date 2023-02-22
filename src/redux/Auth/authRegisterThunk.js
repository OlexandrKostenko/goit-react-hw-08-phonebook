import { createAsyncThunk } from "@reduxjs/toolkit";
import { publicApi, token } from "http/http";

export const authRegisterThunk = createAsyncThunk('signup', async (values) => {
    const { data } = await publicApi.post('users/signup', values);
    token.set(data.token);
    return data;
});