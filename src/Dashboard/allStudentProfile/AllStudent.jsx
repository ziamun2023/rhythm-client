import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllStudent = () => {
    const {data: users =[], refetch}=useQuery(['allusers'],async()=>{
        const res=await fetch('http://localhost:5000/studentProfile')
        return res.json()
    })
    
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
      </tr>
    </thead>
    <tbody>
      {users.map((singleuser,index)=>  <tr key={singleuser._id}>
        <th>{index+1}</th>
        <td>{singleuser.name}</td>
        <td>{singleuser.email}</td>
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