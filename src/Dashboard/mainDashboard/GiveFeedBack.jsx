import React from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const GiveFeedBack = () => {
    const {id}=useParams()
    console.log(id)
    const handleUpdate=(event)=>{
        event.preventDefault()
            const form=event.target
         
            
       
            const description=form.description.value
            const chaged={description}
    
        
    console.log(chaged)
    
    
    
    
    
        fetch(`http://localhost:5000/updatedoc/${id}`,{
            method: "PUT",
            headers: {'Content-Type':'application/json'},
            body : JSON.stringify(chaged)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                Swal.fire({
                  title: 'success!',
                  text: 'Successfully Updated',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
                // navigate('/mytoys')
              
               }
            
        })
    }
    
    return (
        <div>
            <form  onSubmit={handleUpdate} action="">
       <div className='grid lg:grid-cols-3 gap-6'>


    






<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Description</span>

</label>
<input type="text" placeholder="Type here" name='description' className="input input-bordered w-full max-w-xs" />

</div>




       </div>
       <input type="submit" className='btn my-10 text-black bg-yellow-300 hover:text-white' value="submit" />
        </form>
        </div>
    );
};

export default GiveFeedBack;