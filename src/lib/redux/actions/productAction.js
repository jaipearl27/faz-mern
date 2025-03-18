import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
 

export const getProducts = createAsyncThunk(
    "get/products", async(queryData,{rejectWithValue})=>{
        try {
            const {id, minPrice=0, maxPrice=0} = queryData;
            const config ={
                headers:{
                    "Content-Type":"application/json"
                }
            }
            const { data }  = await axios.get(`/api/product?categoryId=${id}&minPrice=${minPrice}&maxPrice=${maxPrice}`,config)
            console.log("the data is inside action is", data)
            return data
        } catch (error) {
          return rejectWithValue(error)            
        }
    }
)


export const createProduct = createAsyncThunk(
    "create/product", async(productData, {rejectWithValue})=>{
        try {
            const config ={
                headers:{
                "Content-Type":"multipart/form-data"
              }
            }
            const formData = new FormData();

            // Append product data fields
            for (const key in productData) {
                if (key === "banner" && Array.isArray(productData.banner)) {
                    productData.banner.forEach((file) => formData.append("banner", file));
                } else {
                    formData.append(key, productData[key]);
                }
            }
            const { data } = await axios.post(`/api/product`, formData, config)
            return data
        } catch (error) {
           return rejectWithValue(error)            
        }
    }
)
