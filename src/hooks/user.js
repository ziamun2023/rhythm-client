import { useState } from "react"

export const allusers=()=>{
    const [admin,setAdmin]=useState([])
    useEffect(()=>{
        fetch('https://music-server-psi.vercel.app/studentProfile')
        .then(res=>res.json())
        .then(data=>setAdmin(data))
    },[])
return admin
}
