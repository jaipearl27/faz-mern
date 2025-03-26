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