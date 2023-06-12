import React, { useContext, useEffect, useState } from 'react';
import Allusers from '../../hooks/Allusers';
import { AuthContext } from '../../providers/AuthProvider';
import MystudentCarts from './MystudentCarts';

const StudentOfInstructor = () => {
    const [liked,setLiked]=useState([])
    console.log(liked)
    useEffect(()=>{
        fetch('http://localhost:5000/peopleliked')
        .then(res=>res.json())
        .then(data=>setLiked(data))
    },[])
    const {user}=useContext(AuthContext)
  
    const myStudents=liked.filter(item=>item.instructorEmail===user?.email)

    return (
        <div className='w-full'>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Studetn Liked </th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {myStudents.map((item ,index)=><MystudentCarts key={item._id} item={item} index={index}></MystudentCarts>)}
   
  

    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default StudentOfInstructor;