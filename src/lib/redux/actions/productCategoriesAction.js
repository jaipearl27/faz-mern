import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCategories = createAsyncThunk(
    "get/productcategories",async(id, {rejectWithValue})=>{
        try {
            const config ={
                headers:{
                    "Content-Type":"application/json"
                }
            }
            const { data } = await axios.get(`/api/productcategory`, config)
            return data
        } catch (error) {
           return rejectWithValue(error)            
        }
    }
)