import React, { useEffect, useState } from 'react';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Popularclass = () => {
    const [classes,setClasses]=useState([])

useEffect(()=>{
    fetch('classes.json')
    .then(res=>res.json())
    .then(data=>setClasses(data))
},[])
console.log

    return (
        <div>
            <p className='text-3xl'>popular classes</p>
<div>
<Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            classes.map(items=> <SwiperSlide key={items.id}>{items.name}
           <img src= {items.image} alt="" /></SwiperSlide>)
        }
      
     
      </Swiper>
</div>
        </div>
    );
};

export default Popularclass;