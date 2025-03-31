import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
 

export const getProducts = createAsyncThunk(
    "get/products", async(queryData,{rejectWithValue})=>{
        try {
            const {id, minPrice=0, maxPrice=0, from} = queryData;
            const config ={
                headers:{
                    "Content-Type":"application/json"
                }
            }
            const { data }  = await axios.get(`/api/product?categoryId=${id}&minPrice=${minPrice}&maxPrice=${maxPrice}&from=${from}`,config)
            console.log("the data is inside action is", data)
            return data
        } catch (error) {
          return rejectWithValue(error)            
        }
    }
)


export const createProduct = createAsyncThunk(
    "create/product",
    async (productData, {
        rejectWithValue
    }) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };
            const formData = new FormData();
            // Ensure banner exists and is an array
            if (productData.banner && Array.isArray(productData.banner)) {
                productData.banner.forEach((file) => {
                    console.log("Appending file:", file);
                    formData.append("banner", file);
                });
            }

            // Append other fields
            formData.append("title", productData.title);
            formData.append("category", productData.category);
            formData.append("price", productData.price);
            formData.append("stock", productData.stock);
            const {
                data
            } = await axios.post(`/api/product`, formData, config);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


export const updateProduct = createAsyncThunk(
    "update/product",async(userdata, {rejectWithValue})=>{
        try {
              const config = {
                  headers: {
                      "Content-Type": "multipart/form-data",
                  },
              };
              const formData = new FormData();
              // Ensure banner exists and is an array
              if (userdata.banner && Array.isArray(userdata.banner)) {
                  userdata.banner.forEach((file) => {
                      console.log("Appending file:", file);
                      formData.append("banner", file);
                  });
              }

              // Append other fields
              formData.append("id", userdata.id)
              formData.append("title", userdata.title);
              formData.append("category", userdata.category);
              formData.append("price", userdata.price);
              formData.append("stock", userdata.stock);
              const data = await axios.patch(`/api/product`, formData, config)

        } catch (error) {
              return rejectWithValue(error)
        }
    }
)


export const deleteProduct = createAsyncThunk(
    "delete/product", async(id,{rejectWithValue})=>{
        try {
            const config ={
                headers:{
                    "Content-Type":"application/json"
                }
            }
            const data = await axios.delete(`/api/product?id=${id}`, config)
            return data
        } catch (error) {
            return rejectWithValue(error)            
        }
    }
)