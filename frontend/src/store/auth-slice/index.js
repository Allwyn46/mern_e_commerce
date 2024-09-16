import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: null,
};

export const registerUserAction = createAsyncThunk(
    '/auth/register',
    async (formData) => {
        await axios.post('http://localhost:5000/api/auth/register', formData, {
            withCredentials: true,
        });

        return response.data;
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {},
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUserAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUserAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(registerUserAction.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            });
    },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
