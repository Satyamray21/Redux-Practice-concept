import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchStates, fetchCitiesByState } from "./locationApi";

// Thunks
export const getStates = createAsyncThunk('location/getStates', async () => {
  return await fetchStates();
});

export const getCities = createAsyncThunk('location/getCities', async (stateName) => {
  return await fetchCitiesByState(stateName);
});

// Slice
const locationSlice = createSlice({
  name: 'location',
  initialState: {
    states: [],
    cities: [],
    error: null,
    loading: false
  },
  reducers: {
    clearCities: (state) => {
      state.cities = [];
    }
  },
  extraReducers: (builder) => {
    builder
      // States
      .addCase(getStates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStates.fulfilled, (state, action) => {
        state.loading = false;
        state.states = action.payload;
      })
      .addCase(getStates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Cities
      .addCase(getCities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCities.fulfilled, (state, action) => {
        state.loading = false;
        state.cities = action.payload;
      })
      .addCase(getCities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

// Exports
export const { clearCities } = locationSlice.actions;
export default locationSlice.reducer;
