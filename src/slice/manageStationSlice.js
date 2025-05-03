import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axiosInstance";

// Fetch all stations
export const fetchStations = createAsyncThunk('/station/fetchStations', async (_, thunkApi) => {
  try {
    const res = await axios.get('/stations/getAllStations');
    return res.data.message;
  } catch (err) {
    return thunkApi.rejectWithValue(err.response?.data?.message || "Failed to fetch stations");
  }
});

// Add new station
export const addStations = createAsyncThunk('/stations/addStations', async (formData, thunkApi) => {
  try {
    const res = await axios.post('/stations/create', formData);
    return res.data.message; // or return the created station if your backend sends it
  } catch (error) {
    return thunkApi.rejectWithValue(error.response?.data?.message || "Failed to add station");
  }
});

const manageStationSlice = createSlice({
  name: 'manageStation',
  initialState: {
    stations: [],
    loading: false,
    error: null,
    stationForm: {
      stationName: "",
      contact: "",
      emailId: "",
      address: "",
      pincode: "",
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStations.fulfilled, (state, action) => {
        state.loading = false;
        state.stations = action.payload;
      })
      .addCase(fetchStations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addStations.fulfilled, (state, action) => {
        // Push only if action.payload is the new station object
        // state.stations.push(action.payload);
      });
  },
});

export default manageStationSlice.reducer;
