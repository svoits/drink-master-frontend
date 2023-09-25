import { createSelector } from '@reduxjs/toolkit';

export const selectSearchQuery = (state) => state.filter.searchQuery;
export const selectCategories = (state) => state.filter.categories;
export const selectIngredients = (state) => state.filters.ingredients;
export const selectGlasses = (state) => state.filter.glasses;
