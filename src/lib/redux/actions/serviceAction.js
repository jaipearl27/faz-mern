import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createService = createAsyncThunk(
    "create/service",async(inputdata,{rejectWithValue})=>{
        try {
            const config = {
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            }
            const { data }= await axios.post()
        } catch (error) {
            
        }
    }
)

export const getServicesData = createAsyncThunk(
    "get/allservices",async(_, {rejectWithValue})=>{
        try {
            const config = {
                headers:{
                    "Content-Type":"application/json"
                }
            }
            const { data }= await axios.get(`/api/serviceroute`, config)
            console.log(data)
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)