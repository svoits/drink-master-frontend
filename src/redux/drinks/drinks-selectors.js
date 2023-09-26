export const selectIsLoading = (state) => state.isLoading;
export const selectDrinks = (state) => state.drinks;
export const selectErrorDrinks = (state) => state.drinks.error;
export const selectDrinkById = (state, drinkId) =>
  state.drinks.drinks.find((drink) => drink._id === drinkId);

export const selectFavoriteDrinks = (state) => {
  return state.drinks.favoriteDrinks.result;
};
