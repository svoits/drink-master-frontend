import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn, signOut } from './auth-operation';
const initialState = {
  user: { name: null, email: null, birthDate: null },
  token: null,
  isLoggedIn: false,
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
      }),
});
export const authReducer = authSlice.reducer;
