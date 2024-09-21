import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isAuthenticated: false,
    isLoading: true,
    user: null,
};

// REGISTER THUNK
export const registerUserAction = createAsyncThunk(
    '/auth/register',
    async (formData) => {
        const response = await axios.post(
            'http://localhost:5000/api/auth/register',
            formData,
            {
                withCredentials: true,
            }
        );

        return response.data;
    }
);

// LOGIN THUNK
export const loginUserAction = createAsyncThunk(
    '/auth/login',
    async (formData) => {
        const response = await axios.post(
            'http://localhost:5000/api/auth/login',
            formData,
            {
                withCredentials: true,
            }
        );

        return response.data;
    }
);

// CHECK AUTH THUNK
export const checkAuth = createAsyncThunk('/auth/check-auth', async () => {
    const response = await axios.get(
        'http://localhost:5000/api/auth/check-auth',
        {
            withCredentials: true,
            headers: {
                'Cache-Control':
                    'no-store, no-cache, must-revalidate, proxy-revalidate',
            },
        }
    );

    return response.data;
});

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
            })

            .addCase(loginUserAction.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUserAction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = !action.payload.success
                    ? null
                    : action.payload.user;
                state.isAuthenticated = !action.payload.success ? false : true;
            })
            .addCase(loginUserAction.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            })

            .addCase(checkAuth.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = !action.payload.success
                    ? null
                    : action.payload.user;
                state.isAuthenticated = !action.payload.success ? false : true;
            })
            .addCase(checkAuth.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            });
    },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
