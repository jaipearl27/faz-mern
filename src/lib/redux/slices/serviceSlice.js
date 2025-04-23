const { createSlice } = require("@reduxjs/toolkit")
const { getServicesData, updateService, deleteService } = require("../actions/serviceAction")

const initialState = {
    isLoading:false,
    isSuccess: false,
    isError:false,
    serviceData:{},
    paginate:{}
}

const createServiceSlice = createSlice({
    name:"services",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getServicesData.pending,state=>{
            state.isLoading= true
            state.isSuccess= false
            state.isError= false
        })
        .addCase(getServicesData.rejected,(state,action)=>{
            state.isError= true
            state.isSuccess= false
            state.isLoading= false
            state.serviceData ={}
        })
        .addCase(getServicesData.fulfilled,(state,action)=>{
            state.isLoading= false
            state.isSuccess- true
            state.isError= false
            state.serviceData= action.payload.data
            state.paginate = action.payload.pagination
        })
        .addCase(updateService.pending,state=>{
            state.isLoading= true
        })
        .addCase(updateService.rejected,(state)=>{
            state.isLoading= false
            state.isError= true
            state.isSuccess= false
        })
        .addCase(updateService.fulfilled,(state)=>{
            state.isLoading= false
            state.isSuccess= true
            state.isError= false
        })
        .addCase(deleteService.pending,state=>{
            state.isLoading= true
        })
        .addCase(deleteService.rejected,state=>{
            state.isLoading = false
            state.isSuccess=false
            state.isError= true
        })
        .addCase(deleteService.fulfilled,state=>{
            state.isLoading= false
            state.isSuccess= true
            state.isError= false
        })
    }
})

export default createServiceSlice.reducer