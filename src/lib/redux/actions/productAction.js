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