import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://car-rental-api.goit.global/";


export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async ({ page = 1, filters = {} }, thunkAPI) => {
    const limit = 12;

    try {
      const res = await axios.get(`/cars`, {
        params: {
          page,
          limit,
          brand: filters.brand || "",
          rentalPrice: filters.price || "", // ✅ Переименовал
          minMileage: filters.mileageFrom?.replace(/[^\d]/g, "") || "", // ✅ Переименовал
          maxMileage: filters.mileageTo?.replace(/[^\d]/g, "") || "", // ✅ Переименовал
        },
      });

      const { cars, totalCars, page: currentPage } = res.data;

      return {
        cars,
        totalCars,
        page: Number(currentPage),
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

  
export const fetchCarById = createAsyncThunk("cars/fetchCarById", async (id, thunkAPI) => {
  try {
    const res = await axios.get(`/cars/${id}`)
      return res.data;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
  }
})
  