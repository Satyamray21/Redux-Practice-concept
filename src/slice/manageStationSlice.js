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

export const deleteStations = createAsyncThunk('/stations/deleteStations',async(stationId,thunkApi)=>{
  try{
    const res = axios.delete(`/stations/delete/${stationId}`);
    return stationId;  
  }
  catch(error)
  {
    return thunkApi.rejectWithValue(error.response?.data?.message|| "Failed To delete");
  }
})

export const getStationById = createAsyncThunk('/stations/getStationById',async(stationId,thunkApi)=>{
  try{
    const res= axios.get(`/stations//searchById/${stationId}`);
    return res.data.message;
  }
  catch(error)
  {
    return thunkApi.rejectWithValue(error.response?.data?.message || "Failed to search the Station");
  }
})

// Update a station
export const updateStation = createAsyncThunk('/stations/updateStation', async ({ stationId, formData }, thunkApi) => {
  try {
    const res = await axios.put(`/stations/update/${stationId}`, formData);
    return res.data.message; // assuming your API returns { message: "Station updated", data: { ...station } }
  } catch (error) {
    return thunkApi.rejectWithValue(error.response?.data?.message || "Failed to update station");
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
    currentStation: null,
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
        
        // state.stations.push(action.payload);
      })
      .addCase(deleteStations.fulfilled,(state,action)=>{
        state.stations=state.stations.filter(station=>station.stationId !== action.payload);
      })
      .addCase(getStationById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStationById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentStation = action.payload; // store the fetched station
      })
      .addCase(getStationById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateStation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateStation.fulfilled, (state, action) => {
        state.loading = false;
      
        const updatedStation = action.payload.data;
        const index = state.stations.findIndex((s) => s.stationId === updatedStation.stationId);
      
        if (index !== -1) {
          state.stations[index] = updatedStation; // update in list
        }
      
        state.currentStation = updatedStation; // update current
      })
      .addCase(updateStation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
      
  },
});

export default manageStationSlice.reducer;
