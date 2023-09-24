import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
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
      console.log(response.data);
      setAuthHeader(response.data.token);
      // console.log(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const signIn = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/auth/signin', credentials);
      setAuthHeader(response.data.token);
      // console.log(response.data);
      // console.log(response.data.token);
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

// export const currentUser = createAsyncThunk(
//   'auth/current',
//   async (_, thunkAPI) => {
//     const { token } = thunkAPI.getState().auth;
//     const persistedToken = state.auth.token;
//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('No valid token');
//     }
//     try {
//       const response = await axios.get('/users/current');
//       console.log(response.data);
//       setAuthHeader(response.data.token);
//       console.log(response.data.token);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );
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
      console.log(res);
      return res.data;
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
