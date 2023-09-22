import { createSlice } from '@reduxjs/toolkit';
import {
  getMainPageAllDrinks,
  getDrinkById,
  getPopularDrinks,
  getRequestedDrink,
  addMyDrink,
  removeDrink,
  removeOwnDrink,
  getOwnDrinks,
  addDrinkToFavorite,
  getFavoriteAll
} from './drinks-operations';
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const hanlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const drinksSlice = createSlice({
  name: 'drinks',
  initialState,

  extraReducers: (builder) => 
    builder
      .addCase(getMainPageAllDrinks.pending, hanlePending)
      .addCase(getMainPageAllDrinks.fulfilled, (state, action) => {
        state.drinks = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getMainPageAllDrinks.rejected, handleRejected)
      .addCase(getDrinkById.fulfilled, (state, action) => {
        state.drinks = action.payload;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPopularDrinks.fulfilled, (state, action) => {
        state.drinks = action.payload;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRequestedDrink.pending, handleRejected)
      .addCase(getRequestedDrink.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(getRequestedDrink.rejected, handleRejected)
      .addCase(addMyDrink.pending, hanlePending)
      .addCase(addMyDrink.fulfilled, (state, action) => {
        state.drinks = action.payload;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addMyDrink.rejected, handleRejected)
      .addCase(removeDrink.pending, hanlePending)
      .addCase(removeDrink.fulfilled, (state, action) => {
        state.drinks = action.payload;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeDrink.rejected, handleRejected)
      .addCase(removeOwnDrink.pending, hanlePending)
      .addCase(removeOwnDrink.fulfilled, (state, action) => {
        state.drinks = action.payload;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getOwnDrinks.rejected, handleRejected)
      .addCase(getOwnDrinks.fulfilled, (state, action) => {
        state.drinks = action.payload;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getOwnDrinks.rejected, handleRejected)
      .addCase(addDrinkToFavorite.pending, hanlePending)
      .addCase(addDrinkToFavorite.fulfilled, (state, action) => {
        state.drinks = action.payload;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addDrinkToFavorite.rejected, handleRejected)
      .addCase(getFavoriteAll.pending, hanlePending)
      .addCase(getFavoriteAll.fulfilled, (state, action) => {
        state.drinks = action.payload;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFavoriteAll.rejected, handleRejected)

});
export const drinksReducer = drinksSlice.reducer;