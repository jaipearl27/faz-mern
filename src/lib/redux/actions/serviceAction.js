import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createService = createAsyncThunk(
    "create/service",async(userdata,{rejectWithValue})=>{
        try {
            const config = {
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            }
            const formData = new FormData()
            if(userdata.banner && Array.isArray(userdata.banner)){
                userdata.banner.forEach(element => {
                    formData.append("banner", element)
                });
            }
            formData.append("title", userdata.title)
            formData.append("description", userdata.description)

            const { data }= await axios.post(`/api/serviceroute`, formData, config)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const getServicesData = createAsyncThunk(
    "get/allservices",async({page,limit}, {rejectWithValue})=>{
        try {
            const config = {
                headers:{
                    "Content-Type":"application/json"
                }
            }
            const { data }= await axios.get(`/api/serviceroute?page=${page}&limit=${limit}`, config)
            console.log(data)
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const updateService = createAsyncThunk(
    "update/service", async(data, {rejectWithValue})=>{
        try {
            const config = {
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            }
            const formdata = new FormData()
            if(data.banner && Array.isArray(data.banner)){
                data.banner.forEach(element =>{
                    formdata.append("banner", element)
                })
            }
            formdata.append("id", data?.id)
            formdata.append("title", data.title)
            formdata.append("description", data.description)
            const res = await axios.patch(`/api/serviceroute`, formdata, config)

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const deleteService = createAsyncThunk(
    "delete/service",async(id, {rejectWithValue})=>{
        try {
            const config ={
                headers:{
                    "Content-Type":"application/json"
                }
            }
            const data = await axios.delete(`/api/serviceroute?id=${id}`,config)
            return data
        } catch (error) {
           return rejectWithValue(error)            
        }
    }
)