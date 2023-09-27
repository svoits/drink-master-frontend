import { createSlice } from '@reduxjs/toolkit';
import {
  signUp,
  signIn,
  signOut,
  currentUser,
  updateUser,
  subscribeDrinks,
} from './auth-operation';
const initialState = {
  user: { name: null, email: null, birthDate: null, avatarURL: null },
  token: null,
  isLoggedIn: false,
  isSubscribed: false,
  isRefreshing: false,
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
        state.user = { name: null, email: null, birthDate: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.avatarURL = payload.avatarURL;
      })
      .addCase(subscribeDrinks.fulfilled, (state) => {
        state.user = { name: null, email: null, birthDate: null };

        state.isLoggedIn = true;
        state.isSubscribed = true;
      }),
  // .addCase(refreshUser.pending, (state) => {
  //   state.isRefreshing = true;
  // })
  // .addCase(refreshUser.fulfilled, (state, action) => {
  //   state.user = action.payload;
  //   state.isLoggedIn = true;
  //   state.isRefreshing = false;
  // })

  // .addCase(refreshUser.rejected, (state) => {
  //   state.isRefreshing = false;
  // }),
});
export const authReducer = authSlice.reducer;

export const { toggleTheme } = authSlice.actions;
