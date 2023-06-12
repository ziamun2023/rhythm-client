import React from 'react';
import UseAllclass from '../../hooks/UseAllclass';
import ClassCards from './ClassCards';


const ClassPage = () => {
  const allclass=UseAllclass()
  const onlyApprovedClass=allclass[0].filter(item=>item.status==='approved')
  console.log(onlyApprovedClass)
  console.log(allclass)
  





  const alltheClass=UseAllclass()
  // console.log("this is",alltheClass)
    return (
        <div className='grid lg:grid-cols-4 gap-7 px-14 py-10'>

{
    onlyApprovedClass.map(items=> <ClassCards key={items._id} items={items}></ClassCards> )
 }




        </div>
    );
};

export default ClassPage;