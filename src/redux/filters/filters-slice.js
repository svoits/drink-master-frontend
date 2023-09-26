import { createSlice } from '@reduxjs/toolkit';
import { getCategories, getIngredients, getGlasses } from './filters-operation';
import { handlePending, handleRejected } from '../handlers';

const initialState = {
  searchQuery: '',
  categories: [],
  ingredients: [],
  glasses: [],
  isLoading: false,
  error: null,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,

  extraReducers: (builder) =>
    builder
      //===================================================
      // .addCase(getRequestedName.pending, handlePending)
      // .addCase(getRequestedName.fulfilled, (state, action) => {
      //   state.searchQuery = action.payload;
      //   state.isLoading = false;
      //   state.error = null;
      // })
      // .addCase(getRequestedName.rejected, handleRejected)
      //===================================================
      // .addCase(getSearchQuery, (state, action) => {
      //   state.searchQuery = action.payload;
      // })
      .addCase(getCategories.pending, handlePending)
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCategories.rejected, handleRejected)
      .addCase(getIngredients.pending, handlePending)
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.ingredients = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getIngredients.rejected, handleRejected)
      .addCase(getGlasses.pending, handlePending)
      .addCase(getGlasses.fulfilled, (state, action) => {
        state.glasses = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getGlasses.rejected, handleRejected),

  reducers: {
    setSearchQuery: {
      reducer: (state, action) => {
        state.searchQuery = action.payload;
      },

      prepare: (searchQuery) => {
        return { payload: searchQuery };
      },
    },
  },
});

export const filtersReducer = filterSlice.reducer;
