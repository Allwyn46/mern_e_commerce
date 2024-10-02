import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import adminProdSlice from './admin/product-slice/adminProdSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        adminProds: adminProdSlice,
    },
});

export default store;
