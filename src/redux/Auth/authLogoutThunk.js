import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateApi, token } from "http/http";

export const authLogoutThunk = createAsyncThunk('logout', async () => {
    try {
        await privateApi.post('users/logout');
      token.remove();  
    } catch (error){
        console.log(error);
    }
});