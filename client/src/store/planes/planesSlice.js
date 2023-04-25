import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import planesService from "../services/planesService";

export const getPlanes = createAsyncThunk('GET_PLANES', async (_, thunkAPI) => {
  try {
    return await planesService.getPlanes();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

const planesSlice = createSlice({
  name: 'planes',
  initialState: {
    planes: null,
    isError: false,
    isLoading: false,
    message: ''
  }
})

export default planesSlice.reducer;