import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "../features/location/locationSlice";
import stationReducer from "../slice/manageStationSlice"
export const store = configureStore({
    reducer:{
        location: locationReducer,
        manageStation:stationReducer,
    }
})
