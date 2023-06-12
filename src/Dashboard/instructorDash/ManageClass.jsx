import React, { useContext } from 'react';
import UseAllclass from '../../hooks/UseAllclass';
import { AuthContext } from '../../providers/AuthProvider';
import InstructorClassCards from './InstructorClassCards';

const ManageClass = () => {
    const {user}=useContext(AuthContext)
    const allclass=UseAllclass()
    console.log(allclass)
    const myclasses=allclass[0].filter(individual=>individual.instructorEmail===user?.email)
console.log(myclasses[0])

     
    return (
        <div className='w-full'>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Class Name</th>
        <th>Available seats</th>
        <th>price</th>
        <th>Total Purchase</th>
        <th>Status</th>
        <th>Feedback</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {myclasses.map(singleclass=><InstructorClassCards key={singleclass._id} singleclass={singleclass}></InstructorClassCards>)}
   
  
   
     

    </tbody>
    {/* foot */}

    
  </table>
</div>
            
        </div>
    );
};

export default ManageClass;