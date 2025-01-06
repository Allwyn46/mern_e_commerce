import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Corrected spelling of initialState
const initialState = {
    isLoading: false,
    productList: [],
};

export const addNewProduct = createAsyncThunk(
    '/products/add-product',
    async (formData) => {
        const response = await axios.post(
            `http://localhost:5000/api/admin/products/add-product`,
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
            `http://localhost:5000/api/admin/products/all-products`
        );

        return response?.data;
        console.log(response?.data);
    }
);

export const editProduct = createAsyncThunk(
    '/products/edit-product',
    async ({ id, formData }) => {
        const response = await axios.put(
            `http://localhost:5000/api/admin/products/edit-product/${id}`,
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
            `http://localhost:5000/api/admin/products/delete-product/${id}`
        );

        return response?.data;
    }
);

const adminProdSlice = createSlice({
    name: 'adminProds',
    initialState, // Use the corrected initialState
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProds.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAllProds.fulfilled, (state, action) => {
                state.isLoading = false;
                state.productList = action.payload.data;
                console.log(action.payload.data);
            })
            .addCase(fetchAllProds.rejected, (state) => {
                state.isLoading = false;
                state.productList = [];
            });
    },
});

export default adminProdSlice.reducer;
