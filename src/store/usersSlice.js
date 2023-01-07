import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers  = createAsyncThunk(
    "getUsers",
    async({country, gender}, thunk)=>{
        try {
            let data  = await axios.get(`${import.meta.env.VITE_APIURL}/getusers?gender=${gender}&country=${country}`)
            return data.data
        } catch (error) {
             return  thunk.rejectWithValue(error.message)  
        }
    }
)


const initialState = {
    loading:false,
    error:false,
    usersData:[]
}


const userSlice = createSlice({
    name:"usersSlice",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(getUsers.pending, (state, action)=>{
            state.loading = true,
            state.error = false
        })
        .addCase(getUsers.rejected, (state, action)=>{
            state.loading = false,
            state.error = true
        })
        .addCase(getUsers.fulfilled, (state, action)=>{
            state.loading = false,
            state.error = false,
            state.usersData = action.payload
        })
    }
})

export default userSlice.reducer
