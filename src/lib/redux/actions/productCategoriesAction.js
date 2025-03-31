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


export const addProductCategories = createAsyncThunk(
    "create/productcategories", async(payloaddata, {rejectWithValue})=>{
        try {
            const config = {
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            }
            const formData = new FormData()
            if(payloaddata.banner && Array.isArray(payloaddata.banner)){
                payloaddata.banner.forEach(element => {
                    formData.append("banner", element)
                });
            }
            formData.append("title", payloaddata.title);
            formData.append("slug", payloaddata.slug)
            formData.append("shortDescription", payloaddata.shortDescription)
            

            const { data } = await axios.post(`/api/productcategory`,formData, config)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const updateProductCategory = createAsyncThunk(
    "update/productcategory",async(userdata, {rejectWithValue})=>{
        try {
            const config = {
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            }
            const formData = new FormData()
             if (userdata.banner && Array.isArray(userdata.banner)) {
                 userdata.banner.forEach(element => {
                     formData.append("banner", element)
                 });
             }
              formData.append("id", userdata.id)
              formData.append("title", userdata.title);
              formData.append("slug", userdata.slug)
              formData.append("shortDescription", userdata.shortDescription)

              const { data } = await axios.patch(`/api/productcategory`, formData,config)

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const deleteCategory = createAsyncThunk(
    "delete/categories",async(id,{rejectWithValue})=>{
       try {
        const config ={
            headers:{
                "Content-Type":"application/json"
            }
        }
        const data = await axios.delete(`/api/productcategory?id=${id}`, config)
        return data
       } catch (error) {
         return rejectWithValue(error)        
       }
    }
)