import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Topbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: 'white', boxShadow: 0, borderBottom: '1px solid #ccc' }}>
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <Box>
          <Typography color="text.primary">Hello, Demo</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
