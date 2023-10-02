import { createSlice } from '@reduxjs/toolkit';
import {
  signUp,
  signIn,
  signOut,
  currentUser,
  updateUser,
  subscribeEmail,
} from './auth-operation';

const initialState = {
  user: { name: '', email: '', birthDate: '', avatarURL: '' },
  token: '',
  isLoggedIn: false,
  isSubscribed: false,
  isRefreshing: true,
  theme: 'dark',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
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
        state.user = { name: '', email: '', birthDate: '' };
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(signOut.rejected, (state) => {
        state.user = { name: '', email: '', birthDate: '' };
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(currentUser.rejected, (state) => {
        state.isRefreshing = false;
        state.token = '';
      })
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        payload.avatarURL && (state.user.avatarURL = payload.avatarURL);
      })
      .addCase(subscribeEmail.fulfilled, (state) => {
        state.isSubscribed = true;
      }),
});
export const authReducer = authSlice.reducer;

export const { toggleTheme } = authSlice.actions;
