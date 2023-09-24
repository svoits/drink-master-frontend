export const selectIsLoading = (state) => state.isLoading;
export const selectDrinks = (state) => state.drinks;
export const selectDrinkById = (state, drinkId) =>
  state.drinks.drinks.find((drink) => drink._id === drinkId);
