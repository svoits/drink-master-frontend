import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://drink-master-api.onrender.com';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const currentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('No valid token');
    }
    try {
      setAuthHeader(response.data.token);
      const response = await axios.get('/users/current');
      console.log(response.data);

      console.log(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateUser = createAsyncThunk(
  'auth/update',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.patch('/users/update', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const subscribeDrinks = createAsyncThunk(
  'auth/subscribe',
  async (data, thunkAPI) => {
    console.log(data);
    try {
      await axios.post('/users/subscribe', data);
      //після цього має відображатись нотифікація, що юзер підписаний
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
