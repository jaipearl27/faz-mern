// lib/redux/store.js
import {
    configureStore
} from '@reduxjs/toolkit';
import rootReducer from './slices'; // Import combined reducers

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Avoid errors with non-serializable values (e.g., Dates)
        }),
});
