import React, { useState } from 'react';
import UseAllclass from '../../hooks/UseAllclass';
// import ManageClassCards from './ManageClassCards';
import { Slide } from 'react-awesome-reveal';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const AllTheClassManagement = () => {
    const alltheclassByInstructors=UseAllclass()
    console.log(alltheclassByInstructors[0])

    

    const {data: allInstClass =[], refetch}=useQuery(['allClass'],async()=>{
        const res=await fetch('https://music-server-psi.vercel.app/allclass')
        return res.json()
    })


    
    const handleApprove=(id)=>{
        console.log(id)
  fetch(`https://music-server-psi.vercel.app/allclass/approve/${id}`,{
    method:'PATCH'
  })
  .then(res=>res.json())
  .then(data=>{
    // console.log(data)
    if(data.modifiedCount){
        refetch()
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Class  has been approved',
            showConfirmButton:false,
            timer:1500
            
        })
    }
  })
    }



    const handledeny=(id)=>{
        console.log(id)
  fetch(`https://music-server-psi.vercel.app/allclass/deny/${id}`,{
    method:'PATCH'
  })
  .then(res=>res.json())
  .then(data=>{
    // console.log(data)
    if(data.modifiedCount){
        refetch()
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Class has been denied ',
            showConfirmButton:false,
            timer:1500
            
        })
    }
  })
    }
  

    
    
  





    return (
        <div className='w-full'>
    <Slide>        <p className='text-3xl text-center my-10 font-bold'>Manage All the classes</p></Slide>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Class Name</th>
        <th>Instructor Name and Email</th>
        <th>Available seats</th>
        <th>status</th>
        <th>Action</th>
        <th>Feedback</th>

        <th></th>
      </tr>
    </thead>
    <tbody>
      {

allInstClass.map((items,index)=>  <tr>
<th>
{index+1}
</th>
<td>
  <div className="flex items-center space-x-3">
    <div className="avatar">
      <div className="mask mask-squircle w-12 h-12">
        <img src={items.image} alt="Avatar Tailwind CSS Component" />
      </div>
    </div>
    <div>
      <div className="font-bold"></div>
      <div className="text-sm opacity-50"></div>
    </div>
  </div>
</td>
<td>
{items.instructorName}
  <br/>
  <span className="badge badge-ghost badge-sm">{items.instructorEmail}</span>
</td>
<td>{items.availableSeat}</td>
<td>{items.status}</td>
<th>
  <button onClick={()=>handleApprove(items._id)} className="btn btn-ghost btn-xs bg-green-500  text-black mx-2">Approve</button>
  <button  onClick={()=>handledeny(items._id)} className="btn btn-ghost btn-xs text-black bg-red-500">Deny</button>
  

</th>
<th>
<div className=" text-black">
<Link to={`/Admindashboard/feedback/${items._id}`}> feed back</Link>
  
</div>
 

</th>
</tr>)


      } 
   instructorName
     
    </tbody>
    {/* foot */}

    
  </table>
</div>
        </div>
    );
};

export default AllTheClassManagement;