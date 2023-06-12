import React, { useContext, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { AuthContext } from '../../providers/AuthProvider';
import Allusers from '../../hooks/Allusers';
import Swal from 'sweetalert2';

const AddNewClass = () => {
    const {user}=useContext(AuthContext)

  console.log(user.email)
  const alluser=Allusers()
  console.log(alluser)
  const theInstructorName=alluser[0].find(instructor=>instructor.email===user?.email)
  
 
  
 
 
     const handleSubmit=(event)=>{
         event.preventDefault()
         const form =event.target
         const totalpurchase=0;
         const instructorName=theInstructorName.name
        //  const instructorName=form.instructorName.name
         const instructorEmail=user.email
        //  const instructorEmail=form.instructorEmail.value
         const image=form.image.value
         const name=form.name.value
         const status=form.status._wrapperState.initialValue
         const price=parseInt(form.price.value)
         const availableSeat=form.availableSeat.value
         const description=form.description.value
        
         const classAdded={instructorName,instructorEmail,image,name,totalpurchase,status,price,availableSeat,description}
 
 console.log(classAdded)
 
 
 
 
         fetch('https://music-server-psi.vercel.app/postclass',{
             method:"POST",
             headers:{'Content-Type':'application/json'},
             body: JSON.stringify(classAdded)
         })
         .then(res=>res.json())
         .then(result=>{
            if(result.insertedId){
             Swal.fire({
               title: 'success!',
               text: 'Successfully Added',
               icon: 'success',
               confirmButtonText: 'Cool'
             })
            }
         })
         console.log(classAdded)
     }


    return (
        <div className='w-full'>
           <p className='text-3xl'> <Fade>Add A new class</Fade></p>
           <div>
            <h1 className="text-5xl font-bold text-center">Add New Toy!</h1>
            <form onSubmit={handleSubmit} action="">
           <div className='grid lg:grid-cols-3 gap-6'>


           <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Instructor name</span>
    
  </label>
  <input  placeholder="Type here" name='instructorName'   value={theInstructorName?.name}  className="input input-bordered w-full max-w-xs" />

</div>

<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text"> instructorEmail</span>
    
  </label>
  <input  placeholder="Pending" name='instructorEmail'   value={user?.email}  className="input input-bordered w-full max-w-xs" />

</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Class Name</span>
    
  </label>
  <input type="text" placeholder="Type here" name='name' className="input input-bordered w-full max-w-xs" />

</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Class photo</span>
    
  </label>
  <input type="text" placeholder="Type here" name='image' className="input input-bordered w-full max-w-xs" />

</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Class status</span>
    
  </label>
  <input  placeholder="Pending" name='status' value='pending' className="input input-bordered w-full max-w-xs" />
 
  

</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Class Price</span>
    
  </label>
  <input type="text" placeholder="Type here" name='price' className="input input-bordered w-full max-w-xs" />

</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text"> availableSeat</span>
    
  </label>
  <input type="text" placeholder="Type here" name='availableSeat' className="input input-bordered w-full max-w-xs" />

</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Description</span>
    
  </label>
  <input type="text" placeholder="Type here" name='description' className="input input-bordered w-full max-w-xs" />

</div>




           </div>
           <input type="submit" className='btn bg-yellow-300 my-10 text-black hover:text-white' value="submit" />
            </form>
            
        </div>
            
        </div>
    );
};

export default AddNewClass;