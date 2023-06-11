import React, { useEffect, useState } from 'react';

const UseAllclass = () => {
    const [allmusic,setAllmusic]=useState([])
useEffect(()=>{
    fetch('http://localhost:5000/allclass')
    .then(res=>res.json())
    .then(data=>setAllmusic(data))
},[])
return [allmusic]
};

export default UseAllclass;