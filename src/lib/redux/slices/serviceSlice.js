const { createSlice } = require("@reduxjs/toolkit")
const { getServicesData } = require("../actions/serviceAction")

const initialState = {
    isLoading:false,
    isSuccess: false,
    isError:false,
    serviceData:{}
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
            state.serviceData= action.payload
        })
    }
})

export default createServiceSlice.reducer