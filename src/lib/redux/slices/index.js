// lib/redux/slices/index.js
import {
    combineReducers
} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import productReducer from "./productSlice"
import productCategoriesReducer from "./productCategorySlice"
const rootReducer = combineReducers({
    auth: authReducer,
    products:productReducer,
    productCategories:productCategoriesReducer
});

export default rootReducer;
