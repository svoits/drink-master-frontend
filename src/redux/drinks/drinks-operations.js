import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://drink-master-api.onrender.com';

export const getMainPageAllDrinks = createAsyncThunk(
  'drinks/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/mainpage');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const getDrinkById = createAsyncThunk(
  'drinks/getDrinkById',
  async (drinkId, thunkAPI) => {
    try {
      const response = await axios.get(`/${drinkId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getPopularDrinks = createAsyncThunk(
  'drinks/getPopularDrinks',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.get(`/popular`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
