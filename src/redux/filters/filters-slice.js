import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    updFilter(_, action) {
      return action.payload;
    },
  },
});

export const filtersReducer = filterSlice.reducer;

export const { updFilter } = filterSlice.actions;