import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchCarById } from "./operations";

const slice = createSlice({
  name: "cars",
  initialState: {
    items: [],
  car: null,
  loading: false,
  error: null,
  total: 0,
  page: 1,
  favorites: JSON.parse(localStorage.getItem("favorites")) || [], 
  },
  
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    resetCars: (state) => {
      state.items = [];
      state.page = 1;
    },
   toggleFavorite: (state, action) => {
  const id = action.payload;
  if (state.favorites.includes(id)) {
    state.favorites = state.favorites.filter((favId) => favId !== id);
  } else {
    state.favorites.push(id);
  }

  // Сохраняем в localStorage
  localStorage.setItem("favorites", JSON.stringify(state.favorites));
},

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.page = action.payload.page;
        state.total = action.payload.totalCars;
        if (action.payload.page === 1) {
          state.items = action.payload.cars;
        } else {
          state.items = [...state.items, ...action.payload.cars];
        }
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCarById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.loading = false;
        state.car = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage, resetCars, toggleFavorite } = slice.actions;
export default slice.reducer;
