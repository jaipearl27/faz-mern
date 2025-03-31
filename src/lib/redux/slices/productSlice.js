import { createSlice } from "@reduxjs/toolkit"
import { createProduct, deleteProduct, getProducts, updateProduct } from "../actions/productAction"

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
        .addCase(updateProduct.pending,state=>{
            state.isLoading= true
        })
        .addCase(updateProduct.rejected,state=>{
            state.isLoading= false
            state.isSuccess= false
            state.isError= true
        })
        .addCase(updateProduct.fulfilled,state=>{
            state.isLoading= false
            state.isSuccess= true
            state.isError= false
        })
        .addCase(deleteProduct.pending,state=>{
            state.isLoading= false
        })
        .addCase(deleteProduct.rejected,(state)=>{
            state.isLoading= false
            state.isSuccess= false
            state.isError= true
        })
        .addCase(deleteProduct.fulfilled,state=>{
            state.isLoading= false;
            state.isSuccess= true
            state.isError= false;
        })
    }
})

export default createProductSlice.reducer;