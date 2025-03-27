// lib/redux/slices/index.js
import {
    combineReducers
} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import productReducer from "./slices/productSlice"
import productCategoriesReducer from "./slices/productCategorySlice"
import serviceReducer from "./slices/serviceSlice"
const rootReducer = combineReducers({
    auth: authReducer,
    products:productReducer,
    productCategories:productCategoriesReducer,
    services: serviceReducer
});

export default rootReducer;
