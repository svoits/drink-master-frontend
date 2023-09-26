import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// axios.defaults.baseURL = 'https://drink-master-api.onrender.com/api';

export const getMainPageAllDrinks = createAsyncThunk(
  'drinks/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('api/drinks/mainpage');

      // console.log('response =>', response); // TEST LINE
      return response.data;
    } catch (error) {
      // console.log('error =>', error); // TEST LINE
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
  'drinks/popular',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/popular');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getRequestedDrink = createAsyncThunk(
  'drinks/search',
  async (data, thunkAPI) => {
    try {
      const response = await axios.get('/search', { data });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addMyDrink = createAsyncThunk(
  'drinks/own/add',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/own/add', { data });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const removeDrink = createAsyncThunk(
  'drinks/favorite/remove/:id',
  async (drinkId, thunkAPI) => {
    try {
      const response = await axios.get(`/favorite/remove/${drinkId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const removeOwnDrink = createAsyncThunk(
  'drinks/own/remove/:id',
  async (drinkId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/drinks/own/remove/${drinkId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getOwnDrinks = createAsyncThunk(
  'drinks/own/all',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/drinks/own/all');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addDrinkToFavorite = createAsyncThunk(
  'drinks/favorite/add/:id',
  async (drinkId, thunkAPI) => {
    try {
      const response = await axios.get(`/favorite/add/${drinkId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getFavoriteAll = createAsyncThunk(
  'drinks/favorite/all',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/favorite/all');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// /own/remove/:id
// /own/all
// /favorite/add/:id
// /favorite/remove/:id
// /favorite/all
