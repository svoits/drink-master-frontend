import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
axios.defaults.baseURL = 'https://drink-master-api.onrender.com';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/auth/signup', credentials);

      setAuthHeader(response.data.token);

      return response.data;
    } catch (error) {
      if (error.response.status === 409) {
        toast.error('User with this email is already registered');
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);
export const signIn = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/auth/signin', credentials);
      setAuthHeader(response.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const signOut = createAsyncThunk(
  '/auth/signout',
  async (_, thunkAPI) => {
    try {
      await axios.post('auth/signout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const currentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;

    if (!token) {
      return thunkAPI.rejectWithValue('Not valid token');
    }

    setAuthHeader(token);

    try {
      const res = await axios.get('/users/current');

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateUser = createAsyncThunk(
  'auth/update',
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch('/users/update', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const subscribeEmail = createAsyncThunk(
  'auth/subscribe',
  async (data, thunkAPI) => {
    try {
      await axios.post('/users/subscribe', data);
      toast.success('You are subscribed for newsletter');
    } catch (error) {
      toast.error(error.response.data.message);

      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
