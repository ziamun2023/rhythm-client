import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import Swal from 'sweetalert2';
import instrIcon from '../../../src/assets/icons8-done-48.png'
import adminDOne from '../../assets/icons8-done-48 (1).png'
import adminicon from '../../assets/icons8-admin-50.png'
import instrIcon2 from '../../assets/icons8-training-50 (1).png'
import Allusers from '../../hooks/Allusers';

const AllStudent = () => {

    const {data: users =[], refetch}=useQuery(['allusers'],async()=>{
        const res=await fetch('http://localhost:5000/studentProfile')
        return res.json()
    })



    const handleMakeAnAdmin=(id)=>{
        console.log(id)
fetch(`http://localhost:5000/studentProfile/admin/${id}`,{
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
            title: 'admin has made',
            showConfirmButton:false,
            timer:1500
            
        })
    }
})
    }


    const handleMakeAnInstructor=(id)=>{
      console.log(id)
fetch(`http://localhost:5000/studentProfile/instructor/${id}`,{
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
          title: 'Instructor has made',
          showConfirmButton:false,
          timer:1500
          
      })
  }
})
  }
    


  const handleDelete = id =>  {
    Swal.fire({
      title: 'Confirm Delete',
      text: 'Are you sure you want to delete this item?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire('Deleted', 'Deleted successfully', 'success');
              const remaining = users.filter(item => item._id !== id);
              // setAllid(remaining);
              refetch()
            }
          });
      }
    });
  };
    return (
     <>

     < >
     <div className='w-full '>
          <p> {users.length}</p>

          <div>
          <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>email</th>
        <th>Admin Role</th>
        <th>Instructor Role</th>
        <th>Status</th>
      </tr>
    </thead>
    <>
    <tbody>
      {users .map((singleuser,index)=>  <tr key={singleuser._id}>
        <th>{index+1}</th>
        <td>{singleuser.name}</td>
        <td>{singleuser.email}</td>
        <td>{singleuser.role==='admin'?<img src={adminDOne} alt="" /> :
        <button className=' text-black' onClick={()=>handleMakeAnAdmin(singleuser._id)}>   <img src={adminicon} alt="" /></button>
        }</td>
        <td>
      {
        singleuser.role==='instructor'? <img src={adminDOne} alt="" /> :   <button className={singleuser.role==='instructor'?' bg-slate-700 rounded-lg text-black disabled':"  rounded-lg  text-black"} onClick={()=>handleMakeAnInstructor(singleuser._id)}> 
        <img src={instrIcon2} alt="" /> </button>
      }
        </td>
      
         <td>{singleuser.role==="instructor"?"This an instructor" : "This is an Admin"}</td>
     
 
         <td><button onClick={()=>handleDelete(singleuser._id)}>Delete</button></td>
     
       
      </tr>)}
    
      {/* row 2 */}
    
      {/* row 3 */}
    
    </tbody>
    </>

  </table>
</div>
          </div>
        </div>
     </>
     </>
    );
};

export default AllStudent;