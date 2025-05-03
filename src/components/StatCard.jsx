import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const StatCard = ({ icon, title, value, subtitle }) => {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
      <Box sx={{ fontSize: 50, color: '#01579b', pr: 2 }}>{icon}</Box>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{value}</Typography>
        <Typography color="text.secondary">{subtitle}</Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;