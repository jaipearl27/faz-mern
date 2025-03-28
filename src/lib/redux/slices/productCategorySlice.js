import { createSlice } from "@reduxjs/toolkit"
import { addProductCategories, getAllCategories } from "../actions/productCategoriesAction"
 
const initialState ={
    isLoading: false,
    isSuccess: false,
    isError: false,
    categoriesData :{},
    paginate:{}
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
            state.paginate= {}
        })
        .addCase(getAllCategories.fulfilled,(state,action)=>{
            state.isError= false
            state.isSuccess= true
            state.isLoading= false
            state.categoriesData = action.payload.data
            state.paginate = action.payload.pagination
        })
        .addCase(addProductCategories.pending,state=>{
                    state.isLoading = true
                    state.isSuccess = false
                    state.isError = false
        })
        .addCase(addProductCategories.rejected,(state,action)=>{
               state.isLoading = false
               state.isSuccess = false
               state.isError = true
        })
        .addCase(addProductCategories.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
        })
    }
})

export default createProductCategoriesSlice.reducer