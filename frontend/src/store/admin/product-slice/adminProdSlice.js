import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const iniatialState = {
    isLoading: false,
    productList: [],
};

export const addNewProduct = createAsyncThunk(
    '/products/add-product',
    async (formData) => {
        const response = await axios.post(
            `${process.env.API}/admin/products/add-product`,
            formData,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        return response.data;
    }
);

const adminProdSlice = createSlice({
    name: 'adminProdSlice',
    initialState: iniatialState,
    reducers: {},
    extraReducers: (builder) => {},
});
