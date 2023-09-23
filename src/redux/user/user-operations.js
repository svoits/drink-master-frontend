import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://drink-master-api.onrender.com';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const currentUser = createAsyncThunk(
  'auth/current',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.get('/current', credentials);
    //   console.log(response.data);
      setAuthHeader(response.data.token);
    //   console.log(response.data.token);
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
      const response = await axios.patch('/update', credentials);
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
        await axios.post('/subscribe', data);
        //після цього має відображатись нотифікація, що юзер підписаний
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
  },
);

