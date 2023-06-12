import React, { useEffect, useState } from 'react';
import { useFetcher } from 'react-router-dom';
import InstructorsCards from './InstructorsCards';

const Allinstructor = () => {
    const [instructors,setInstructors]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allinstructors')
        .then(res=>res.json())
        .then(data=>setInstructors(data))
    },[])
    return (
        <div className='grid lg:grid-cols-4 gap-7 px-14 py-10'>

        {
            instructors.map(items=> <InstructorsCards key={items._id} items={items}></InstructorsCards> )
         }
        
        
        
        
                </div>
    );
};

export default Allinstructor;