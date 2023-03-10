import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../Api/apiClient";
import { getPost } from "../../Api/apiRoute";

const initialState = {
    getPost:[],
    status:"",
    data:[]
};

export const getAllPost = createAsyncThunk(
    "crud/getAllPost",
    async()=>{
    try{
       const response = await apiClient({
        method:"GET",
        endPoint: getPost()
       })
       return response; 
       
    }
    catch(error){
        return error
    }    
})

const crudSlice = createSlice({
    name:"crud",
    initialState,
    reducers:{
        addData: (state,action) => {
            let object = action.payload
            state.data.push(object)
        }
    },
    extraReducers:(builder) => {
        builder.addCase(getAllPost.pending,(state)=>{
            state.status = "pending";
        })
        .addCase(getAllPost.fulfilled,(state,action)=>{
            state.status = "success";
            state.getPost = action.payload;
        })
        .addCase(getAllPost.rejected,(state)=>{
            state.status = "failed";
        })
    }
})

export const { addData } = crudSlice.actions;

export default crudSlice.reducer;