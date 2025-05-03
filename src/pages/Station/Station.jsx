import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  MenuItem,
} from "@mui/material";
import { getStates, getCities } from "../../features/location/locationSlice.js";
import { useSelector, useDispatch } from "react-redux";

const Station = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const dispatch = useDispatch();
  const { states, cities, loading } = useSelector((state) => state.location);

  useEffect(() => {
    dispatch(getStates());
  }, [dispatch]);

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setState(selectedState);
    setCity(""); // Reset city when state changes
    dispatch(getCities(selectedState));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Station Details
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 600,
        }}
      >
        <TextField label="Station Name" fullWidth />
        <TextField label="Contact Number" fullWidth />
        <TextField label="Email ID" fullWidth />
        <TextField label="Address / Street" fullWidth />

        {/* State Dropdown */}
        <TextField
          select
          label="Select State"
          value={state}
          onChange={handleStateChange}
          fullWidth
        >
          {states.map((st) => (
            <MenuItem key={st} value={st}>
              {st}
            </MenuItem>
          ))}
        </TextField>

        {/* City Dropdown */}
        <TextField
          select
          label="Select City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          fullWidth
          disabled={!state}
        >
          {cities.map((ct) => (
            <MenuItem key={ct} value={ct}>
              {ct}
            </MenuItem>
          ))}
        </TextField>

        <TextField label="Pin Code" fullWidth />

        {/* Submit Button Centered */}
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Station;
