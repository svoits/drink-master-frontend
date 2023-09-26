export const selectIsLoading = (state) => state.drinks.isLoading;
export const selectMainPageDrinks = (state) => state.drinks.mainPageDrinks;
export const selectDrinks = (state) => state.drinks.drinks;
export const selectErrorDrinks = (state) => state.drinks.error;
export const selectDrinkById = (state, drinkId) =>
  state.drinks.drinks.find((drink) => drink._id === drinkId);
export const selectFavoriteDrinks = (state) => state.drinks.favoriteDrinks;
