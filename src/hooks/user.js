import { useState } from "react"

export const allusers=()=>{
    const [admin,setAdmin]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/studentProfile')
        .then(res=>res.json())
        .then(data=>setAdmin(data))
    },[])
return admin
}
