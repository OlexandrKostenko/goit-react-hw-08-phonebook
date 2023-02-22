export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthToken = (state) => state.auth.data;
export const selectAuthUserName = (state) => state.auth.data.user.name;
export const selectAuthLogin = (state) => state.auth.isLogin;
export const selectAuthRefresh = (state) => state.auth.isRefreshing;