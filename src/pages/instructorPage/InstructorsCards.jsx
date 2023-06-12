import React from 'react';

const InstructorsCards = ({items}) => {
    const {image,name,price,numberofStudent,instructorName,instructorEmail,availableSeat,_id}=items
    return (
        <div className='shadow-lg h-[600px] '>
        <img className='w-[400px] h-[400px] my-auto mx-auto' src={image} alt="" />
       <div className=' justify-around ms-5  text-2xl  mt-5 mx-2 bg-black  text-white rounded-xl py-2 '>
       <p className='text-white px-2'>Instructor Name:{instructorName}</p> 
       <br />
       <p className='text-white px-2'> Instructor Email:{instructorEmail}</p> 
       </div>
     
 
        </div>
    );
};

export default InstructorsCards;