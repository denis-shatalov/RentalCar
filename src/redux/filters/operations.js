import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";



export const fetchBrand = createAsyncThunk("cars/fetchBrand", async (_, thunkAPI) => {
    try {
      const res = await axios.get(`/brands`)
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
  })