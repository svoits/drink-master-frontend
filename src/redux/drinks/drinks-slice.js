import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const drinksSlice = createSlice({
  name: 'drinks',
  initialState,
  extraReducers: {},
});
