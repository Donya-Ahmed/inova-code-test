// store.js
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/apiSlice';

const store = configureStore({
  reducer: {
    // Include the API slice reducer
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // Configure middleware for RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
