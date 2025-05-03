import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  MenuItem,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getStates, getCities } from "../../features/location/locationSlice.js";
import { addStations } from "../../slice/manageStationSlice.js";

const Station = () => {
  const [stateValue, setStateValue] = useState(""); // renamed to 'stateValue' for clarity
  const [city, setCity] = useState("");
  const [formData, setFormData] = useState({
    stationName: "",
    contact: "",
    emailId: "",
    address: "",
    pincode: "",
  });

  const dispatch = useDispatch();
  const { states, cities, loading } = useSelector((state) => state.location);

  useEffect(() => {
    dispatch(getStates());
  }, [dispatch]);

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setStateValue(selectedState); // Update state value
    setCity(""); // Reset city when state changes
    dispatch(getCities(selectedState));
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Basic form validation
    if (
      !formData.stationName ||
      !formData.contact ||
      !formData.address ||
      !stateValue ||
      !city
    ) {
      alert("Please fill all required fields.");
      return;
    }

    // Final data to send with the station
    const finalData = {
      ...formData,
      state: stateValue,
      city,
    };

    try {
      await dispatch(addStations(finalData)).unwrap(); // Using unwrap to catch error in case of failure
      alert("Station added successfully!");

      // Reset form fields after successful submission
      setFormData({
        stationName: "",
        contact: "",
        emailId: "",
        address: "",
        pincode: "",
      });
      setStateValue("");
      setCity("");
    } catch (error) {
      alert("Failed to add station: " + error);
    }
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
        <TextField
          label="Station Name"
          fullWidth
          value={formData.stationName}
          onChange={(e) =>
            setFormData({ ...formData, stationName: e.target.value })
          }
        />
        <TextField
          label="Contact Number"
          fullWidth
          value={formData.contact}
          onChange={(e) =>
            setFormData({ ...formData, contact: e.target.value })
          }
        />
        <TextField
          label="Email ID"
          fullWidth
          value={formData.emailId}
          onChange={(e) =>
            setFormData({ ...formData, emailId: e.target.value })
          }
        />
        <TextField
          label="Address / Street"
          fullWidth
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />

        {/* State Dropdown */}
        <TextField
          select
          label="Select State"
          value={stateValue}
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
          disabled={!stateValue}
        >
          {cities.map((ct) => (
            <MenuItem key={ct} value={ct}>
              {ct}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Pin Code"
          fullWidth
          value={formData.pinCode}
          onChange={(e) =>
            setFormData({ ...formData, pincode: e.target.value })
          }
        />

        {/* Submit Button Centered */}
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Station;
