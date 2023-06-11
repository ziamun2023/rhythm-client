import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

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
    
    return (
        <div className='w-full'>
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
        <th>Role</th>
        <th>Action</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {users.map((singleuser,index)=>  <tr key={singleuser._id}>
        <th>{index+1}</th>
        <td>{singleuser.name}</td>
        <td>{singleuser.email}</td>
        <td>{singleuser.role==='admin'?'admin':
        <button className='bg-green-600 text-black' onClick={()=>handleMakeAnAdmin(singleuser._id)}>make admin</button>
        }</td>
        <td>{singleuser.role==='instructor'?'instructor':
        <button className=' bg-amber-500 text-black' onClick={()=>handleMakeAnInstructor(singleuser._id)}>make Instructor</button>
        }</td>
      
         <td>{singleuser.role==="instructor"?"This an instructor" : "This is an Admin"}</td>
        <td><button onClick={()=>handleDeleteUser(singleuser)}>Delete</button></td>
      </tr>)}
    
      {/* row 2 */}
    
      {/* row 3 */}
    
    </tbody>
  </table>
</div>
          </div>
        </div>
    );
};

export default AllStudent;