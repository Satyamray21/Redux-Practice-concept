import React, { useEffect, useState } from "react"
import axios from "axios";
import PersonIcon from '@mui/icons-material/Person';
import StatCard from "../../components/StatCard.jsx"
const CustomerCard = () =>{
    const[totalCount,setTotalCount]=useState(0);
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const res = await axios.get('http://localhost:8000/api/v2/customers/total-count',{
                    withCredentials:true})
                    setTotalCount(res.data.message.totalCustomer);
            }
            catch(error)
            {
                console.log('error',error);
            }
        }
        fetchData();
            
        
       
        

    },[])
    return (
        <>
        <StatCard title="Customer" value={totalCount} subtitle="Total" icon={<PersonIcon />} />
        </>
    )

}

export default CustomerCard;
