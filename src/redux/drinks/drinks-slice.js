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
  getFavoriteAll,
} from './drinks-operations';
import { hanlePending, handleRejected } from '../handlers';

const initialState = {
  // searchQuery: '',
  drinks: [],
  favoriteDrinks: [],
  isLoading: false,
  error: null,
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
        state.drinks = [action.payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getPopularDrinks.fulfilled, (state, action) => {
        state.drinks = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRequestedDrink.pending, handleRejected)
      .addCase(getRequestedDrink.fulfilled, (state, action) => {
        state.drinks = action.payload;
        // state.searchQuery = action.payload;
        state.isLoading = false;
      })
      .addCase(getRequestedDrink.rejected, handleRejected)
      .addCase(addMyDrink.pending, hanlePending)
      .addCase(addMyDrink.fulfilled, (state, action) => {
        state.drinks = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addMyDrink.rejected, handleRejected)
      .addCase(removeDrink.pending, hanlePending)
      .addCase(removeDrink.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.favoriteDrinks.result.findIndex(
          (drink) => drink._id === action.payload.result._id,
        );
        state.favoriteDrinks.result.splice(index, 1);
      })
      .addCase(removeDrink.rejected, handleRejected)
      .addCase(removeOwnDrink.pending, hanlePending)
      .addCase(removeOwnDrink.fulfilled, (state, action) => {
        state.drinks = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getOwnDrinks.pending, hanlePending)
      .addCase(getOwnDrinks.fulfilled, (state, action) => {
        state.drinks = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getOwnDrinks.rejected, handleRejected)
      .addCase(addDrinkToFavorite.pending, hanlePending)
      .addCase(addDrinkToFavorite.fulfilled, (state, action) => {
        state.favoriteDrinks.result.push(action.payload.result);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addDrinkToFavorite.rejected, handleRejected)
      .addCase(getFavoriteAll.pending, hanlePending)
      .addCase(getFavoriteAll.fulfilled, (state, action) => {
        state.favoriteDrinks = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getFavoriteAll.rejected, handleRejected),
});

export const drinksReducer = drinksSlice.reducer;
