import React, { useContext, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles

import "swiper/css/free-mode";
import "swiper/css/pagination";



// import required modules
import { FreeMode, Pagination } from "swiper";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import Cards from "./Cards";
import UseAllclass from "../../hooks/UseAllclass";
import { Slide } from "react-awesome-reveal";






const Popularclass = () => {
  const {isDarkMode}=useContext(AuthContext)

  
const allclass=UseAllclass()
const onlyApprovedClass=allclass[0].filter(item=>item.status==='approved')
console.log(onlyApprovedClass)
console.log(allclass)


    return (
   <div >
      <div className="hidden lg:block">
      <div className={isDarkMode?" bg-black" : "bg-white"}>
      <Slide> <p className='text-5xl text-center text-bold my-10 bg-gray-600 text-white rounded-xl py-3'>Popular Classes</p></Slide>
           <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper "
      >
 {
    onlyApprovedClass.slice(0,6).map(items=><SwiperSlide > <Cards key={items._id} items={items}></Cards></SwiperSlide>)
 }
<p className="text-center my-10">
<button className="mx-auto nav btn border-0 text-white text-2xl "> <Link to='/allclass'>Show All</Link></button>
</p>

      </Swiper>
        </div>
      </div>
      <div className="lg:hidden">
      {
    onlyApprovedClass.slice(0,6).map(items=><SwiperSlide > <Cards key={items._id} items={items}></Cards></SwiperSlide>)
 }
      </div>
   </div>
    );
};

export default Popularclass;