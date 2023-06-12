import { useEffect, useState } from "react";


const Allusers = () => {
    const [admin,setAdmin]=useState([])
    useEffect(()=>{
        fetch('https://music-server-psi.vercel.app/studentProfile')
        .then(res=>res.json())
        .then(data=>setAdmin(data))
    },[])

    return [admin]
};

export default Allusers;