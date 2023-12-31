/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import ProductHub from '../../../api/Product';

export const GetAllProducts: any = createAsyncThunk(
  'products/GetAllproducts',
  async (_props, thunkAPI) => {
    try {
      return await ProductHub.getAllProducts();
    } catch (error: any) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const GetCategories = createAsyncThunk(
  'products/GetCategories',
  async (_props, thunkAPI) => {
    try {
      return await ProductHub.getCategories();
    } catch (error: any) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const GetProductByCategory: any = createAsyncThunk(
  'products/GetProductByCategory',
  async (props: any, thunkAPI) => {
    try {
      return await ProductHub.getProductByCategory(props);
    } catch (error: any) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const GetRandomProducts = createAsyncThunk(
  'products/GetProductByCategory',
  async (props: number, thunkAPI) => {
    try {
      return await ProductHub.getRandomProducts(props);
    } catch (error: any) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);
