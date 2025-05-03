import React, { useEffect, useState } from "react";
import TrainOutlinedIcon from '@mui/icons-material/TrainOutlined';
import StatCard from "../../components/StatCard.jsx";
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Button
  } from '@mui/material';
import axios from "axios"
import {fetchStations,deleteStations} from  "../../slice/manageStationSlice.js"
import { useDispatch ,useSelector} from "react-redux";
const StationCard = () =>{
    const[totalStation,setTotalStation ]=useState(0);
    const{stations,loading,error}= useSelector((state)=>(state.manageStation));
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchTotalStations = async()=>{
            try{
                const res = await axios.get('http://localhost:8000/api/v2/stations/getTotalStations',{
                withCredentials: true
                });
                console.log("API response:", res.data)
                setTotalStation(res.data.data.totalStations);
            }
            catch(error)
            {
                console.error("Failed to fetch total stations", error);
            }
        }
        fetchTotalStations();


    },[])
    useEffect(()=>{
        dispatch(fetchStations());
    },[dispatch])
    //for deleting 
    const handleDelete = (stationId) => {
        if (window.confirm("Are you sure you want to delete this station?")) {
          dispatch(deleteStations(stationId));
        }
      };
    return (
        <>
        <StatCard icon={<TrainOutlinedIcon/>} title='Total Station' value={totalStation} />
        <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S. No</TableCell>
            <TableCell>Station ID</TableCell>
            <TableCell>Station Name</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            { loading ? (
             <TableRow>  <TableCell colSpan = {5} >Loading...</TableCell></TableRow>  
            ):error ? (
            <TableRow> <TableCell colSpan = {5}> Error</TableCell></TableRow>
            ):stations?.length > 0 ? (
                stations?.map((station,index) => (
                    <TableRow key={station._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{station.stationId}</TableCell>
                <TableCell>{station.stationName}</TableCell>
                <TableCell>{station.contactNumber}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" size="small" >Edit</Button>
                  <Button 
                  variant="outlined" 
                  color="error" 
                  size="small" sx={{ ml: 1 }}  
                  onClick={() => handleDelete(station.stationId)}
                    >Delete
                    </Button>
                </TableCell>
              </TableRow>
                ))
            ): (
                <TableRow>
                  <TableCell colSpan={5}>No stations available</TableCell>
                </TableRow>
              )}
            
        </TableBody>
        </Table>
        </TableContainer>
        </>
    );
};

export default StationCard;