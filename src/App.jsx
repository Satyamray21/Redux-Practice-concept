import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, Box } from "@mui/material";
import SlideBar from "./components/SlideBar"
import Topbar from "./components/Topbar";
import Station from  "./pages/Station/Station.jsx";
function App() {
  return (
    <Router>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
       <SlideBar />
        <Box sx={{ flexGrow: 1, bgcolor: '#f5f7f8', minHeight: '100vh' }}>
          <Topbar />
          <Station />
        </Box>
      </Box>
    </Router>
  );
}

export default App;