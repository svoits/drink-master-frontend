import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://drink-master-api.onrender.com';

export const getCategories = createAsyncThunk(
    'filters/getCategories',
    async (data, thunkAPI) => {
        try {
            const response = await axios.get('/categories', data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);

export const getIngridients = createAsyncThunk(
    'filters/getIngridients',
    async (data, thunkAPI) => {
        try {
            const response = await axios.get('/ingridients', data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);

export const getGlasses = createAsyncThunk(
    'filters/getGlasses',
    async (data, thunkAPI) => {
        try {
            const response = await axios.get('/glasses', data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);