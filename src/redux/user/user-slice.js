import { createSlice } from '@reduxjs/toolkit';
import { currentUser, updateUser, subscribeDrinks } from './user-operations';

const initialState = {
  user: { name: null, email: null, birthDate: null },
  token: null,
  isLoggedIn: false,
  isSubscribed: false,
  theme: 'dark',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(subscribeDrinks.fulfilled, (state) => {
        state.user = { name: null, email: null, birthDate: null };
        state.token = null;
        state.isLoggedIn = true;
        state.isSubscribed = true;
      }),
});

export const userReducer = userSlice.reducer;

export const { toggleTheme } = userSlice.actions;
