import { useEffect, useState } from "react";


const Allusers = () => {
    const [admin,setAdmin]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/studentProfile')
        .then(res=>res.json())
        .then(data=>setAdmin(data))
    },[])

    return [admin]
};

export default Allusers;