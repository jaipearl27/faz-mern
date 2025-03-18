import { createSlice } from "@reduxjs/toolkit"
import { getAllCategories } from "../actions/productCategoriesAction"
 
const initialState ={
    isLoading: false,
    isSuccess: false,
    isError: false,
    categoriesData : {

    }
}

const createProductCategoriesSlice = createSlice({
    name:"productcategories",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllCategories.pending,(state)=>{
            state.isLoading= true
            state.isSuccess= false
            state.isError = false
        })
        .addCase(getAllCategories.rejected,(state,action)=>{
            state.isError= true
            state.isSuccess= false
            state.isLoading= false
            state.categoriesData={}
        })
        .addCase(getAllCategories.fulfilled,(state,action)=>{
            state.isError= false
            state.isSuccess= true
            state.isLoading= false
            state.categoriesData = action.payload.data
        })
    }
})

export default createProductCategoriesSlice.reducer