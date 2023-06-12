import React from 'react';
import InstructorsCards from '../../pages/instructorPage/InstructorsCards';
import { Fade, Slide } from 'react-awesome-reveal';

const PopularInstructor = () => {
    const [instructors,setInstructors]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allinstructors')
        .then(res=>res.json())
        .then(data=>setInstructors(data))
    },[])
    return (
    <>
    <Slide>Popular Instructors</Slide>
   <Fade>
   <div className='grid lg:grid-cols-3  gap-7 px-14 py-10'>

{
    instructors.map(items=> <InstructorsCards key={items._id} items={items}></InstructorsCards> )
 }




        </div></Fade></>
    );
};

export default PopularInstructor;