import React from 'react';
import UseAllclass from '../../hooks/UseAllclass';
import ManageClassCards from './ManageClassCards';
import { Slide } from 'react-awesome-reveal';

const AllTheClassManagement = () => {
    const alltheclassByInstructors=UseAllclass()
    console.log(alltheclassByInstructors[0])
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

alltheclassByInstructors[0].map((items,index)=><ManageClassCards key={items._id} items={items} index={index}></ManageClassCards>)


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