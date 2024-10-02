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

        return response?.data;
    }
);

export const fetchAllProds = createAsyncThunk(
    '/products/all-products',
    async () => {
        const response = await axios.get(
            `${process.env.API}/admin/products/all-products`
        );

        return response?.data;
    }
);

export const editProduct = createAsyncThunk(
    '/products/edit-product',
    async ({ id, formData }) => {
        const response = await axios.put(
            `${process.env.API}/admin/products/edit-product/${id}`,
            formData,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        return response?.data;
    }
);

export const deleteProduct = createAsyncThunk(
    '/products/delete-product',
    async (id) => {
        const response = await axios.delete(
            `${process.env.API}/admin/products/delete-product/${id}`
        );

        return response?.data;
    }
);

const adminProdSlice = createSlice({
    name: 'adminProdSlice',
    initialState: iniatialState,
    reducers: {},
    extraReducers: (builder) => {},
});
