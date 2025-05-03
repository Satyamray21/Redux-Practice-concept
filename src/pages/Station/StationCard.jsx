import React, { useEffect, useState } from "react";
import TrainOutlinedIcon from '@mui/icons-material/TrainOutlined';
import StatCard from "../../components/StatCard.jsx";
import axios from "axios"
const StationCard = () =>{
    const[totalStation,setTotalStation ]=useState(0);
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
    return (
        <>
        <StatCard icon={<TrainOutlinedIcon/>} title='Total Station' value={totalStation} />
        </>
    )
}

export default StationCard;