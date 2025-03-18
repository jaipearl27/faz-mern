import { createSlice } from "@reduxjs/toolkit"
import { createProduct, getProducts } from "../actions/productAction"

const initialState ={
    isLoading:false,
    isSuccess:false,
    isError:false,
    productsData:{},
    categoryData:{},
    paginate:{}
}


const createProductSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.pending,(state)=>{
            state.isLoading = true
            state.isSuccess= false
            state.isError = false
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.isLoading= false
            state.isSuccess= false
            state.isError=true
            state.productsData = {}
            state.categoryData={}
            state.paginate={}
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.isLoading= false
            state.isError= false
            state.isSuccess= true
            state.productsData = action.payload.products
            state.categoryData= action.payload.categorieData
            state.paginate = action.payload.paginate
        })
        .addCase(createProduct.pending,(state)=>{
            state.isLoading= true
            state.isSuccess= false
            state.isError= false
        })
        .addCase(createProduct.rejected,(state,action)=>{
            state.isLoading= false
            state.isSuccess= false
            state.isError= true
        })
        .addCase(createProduct.fulfilled,(state,action)=>{
            state.isLoading= false
            state.isError= false
            state.isSuccess= true
        })
    }
})

export default createProductSlice.reducer;