import { createSlice } from "@reduxjs/toolkit";
import { fetchBrand } from "./operations";

const slice = createSlice({
  name: "filters",
  initialState: {
    brand: [],         // список брендов (из API)
    selectedFilters: { // ТЕКУЩИЕ значения фильтров
      brand: "",
      rentalPrice: "",
      minMileage: "",
      maxMileage: "",
    },
  },
  reducers: {
    setSelectedFilters: (state, action) => {
      state.selectedFilters = action.payload;
    },
    resetSelectedFilters: (state) => {
      state.selectedFilters = {
        brand: "",
        rentalPrice: "",
        minMileage: "",
        maxMileage: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBrand.fulfilled, (state, action) => {
      state.brand = action.payload;
    });
  },
});

export const { setSelectedFilters, resetSelectedFilters } = slice.actions;

export default slice.reducer;



