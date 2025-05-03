import React from "react";
import { Box, Grid } from "@mui/material";
import StatCard from "../components/StatCard";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DirectionsTruckIcon from '@mui/icons-material/LocalShipping';

import StationCard from "./Station/StationCard";
import CustomerCard from "./Customer/CustomerCard";

const Dashboard = () => {
  return (
    <Box p={3}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <StatCard title="Booking Requests" value="0" subtitle="0% (30 days)" icon={<AssignmentIcon />} />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard title="Active Deliveries" value="3" subtitle="100% (30 days)" icon={<DirectionsTruckIcon />} />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard title="Total Cancelled" value="0" subtitle="0% (30 days)" icon={<AssignmentIcon />} />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard title="Total Revenue" value="Rs 17729.87" subtitle="100% (30 days)" icon={<MonetizationOnIcon />} />
        </Grid>
        <Grid item xs={12} md={3}>
          <CustomerCard/>
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard title="Vehicles Available" value="1" subtitle="Total: 8" icon={<DirectionsTruckIcon />} />
        </Grid>
        <Grid item xs={12} md={3}>
          <StatCard title="Drivers Available" value="3" subtitle="Total: 3"  />
        </Grid>
        <StationCard />
      </Grid>
    </Box>
  );
};

export default Dashboard;