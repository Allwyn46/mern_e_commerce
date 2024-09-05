// const { configureStore } = require('@reduxjs/toolkit');
// const { default: authSlice } = require('./auth-slice');

import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth-slice';

const store = configureStore({
    reducer: {
        auth: authSlice,
    },
});

export default store;
