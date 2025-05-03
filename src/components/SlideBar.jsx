import React from "react";
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import GpsFixedSharpIcon from '@mui/icons-material/GpsFixedSharp';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import FilePresentOutlinedIcon from '@mui/icons-material/FilePresentOutlined';
import DomainAddIcon from '@mui/icons-material/DomainAdd';

const menuItems = [
  { text: "Dashboard", icon: <HomeIcon /> },
  { text: "Manage Booking" ,icon :< FileOpenOutlinedIcon />},
  { text: "Manage Delivery", icon: <CloudUploadOutlinedIcon /> },
  { text: "Manage Vehicle", icon: <LocalShippingOutlinedIcon /> },
  { text: "Manage Driver ",icon:<AirlineSeatReclineExtraIcon />},
  { text : "Tracker",icon:<GpsFixedSharpIcon fontSize="medium" />},
  { text : "Manage Customer",icon:<GroupsOutlinedIcon />},
  { text : "Customer Quatation",icon:<CurrencyExchangeOutlinedIcon />},
  { text : "Customer Ledger",icon:<EditNoteOutlinedIcon />},
  { text : "Ledger History",icon:< FilePresentOutlinedIcon />},
  { text : "Manage User",icon:<PeopleOutlineIcon />},
  { text : "Manage Station",icon:<DomainAddIcon />},
  { text : "Manage Expenses",icon:< AssignmentOutlinedIcon />},
  { text : "Manage Contact",icon:<ContactPageOutlinedIcon />}

];

const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left" sx={{ width: 240, flexShrink: 0 }}>
      <Box sx={{ width: 240, bgcolor: 'white', height: '100vh' }}>
        <Typography variant="h2" align="center" sx={{ py: 2, color: '#01579b' }}>
          BPS
        </Typography>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;