import { createSlice } from "@reduxjs/toolkit";

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