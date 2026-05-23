import {createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../Api/Interceptor/Interceptor.js"

export const fetchAllUser = createAsyncThunk("users/fetchAllUser", async ( _ ,thunkAPI ) => {
    try{
        const response = await api.get("/user");
        return response;
    } catch(error){
        return thunkAPI.rejectWithValue(error.response?.data || error.message)
    }
}, );

//create user Slice
const userSlice = createSlice({
    name: "users",
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(
            fetchAllUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            }
        )
        .addCase(fetchAllUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(fetchAllUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default userSlice.reducer