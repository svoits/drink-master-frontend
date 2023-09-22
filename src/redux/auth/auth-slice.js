import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn, signOut, refreshUser } from './auth-operation';
const initialState = {
  user: { name: null, email: null, birthDate: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.user = { name: null, email: null, birthDate: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state) => {
            state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, (state) => {
            state.isRefreshing = false;
      })
  
});
export const authReducer = authSlice.reducer;
