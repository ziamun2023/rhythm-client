import React, { useEffect, useState } from 'react';

const UseAllclass = () => {
    const [allmusic,setAllmusic]=useState([])
    console.log(allmusic)
useEffect(()=>{
    fetch('https://music-server-psi.vercel.app/allclass')
    .then(res=>res.json())
    .then(data=>setAllmusic(data))
},[])
return [allmusic]
};

export default UseAllclass;