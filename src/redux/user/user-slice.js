import { createSlice } from '@reduxjs/toolkit';
import { currentUser, updateUser, subscribeDrinks } from './user-operations';

const initialState = {
    user: { name: null, email: null, birthDate: null },
    token: null,
    isLoggedIn: false,
    isSubscribed: false,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
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
