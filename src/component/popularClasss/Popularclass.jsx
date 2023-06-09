import React, { useContext, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/free-mode";
import "swiper/css/pagination";



// import required modules
import { FreeMode, Pagination } from "swiper";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import Cards from "./Cards";






const Popularclass = () => {
  
    const [classes,setClasses]=useState([])

useEffect(()=>{
    fetch('classes.json')
    .then(res=>res.json())
    .then(data=>setClasses(data))
},[])
    return (
        <div>
           <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
 {
    classes.map(items=><SwiperSlide > <Cards key={items._id} items={items}></Cards></SwiperSlide>)
 }
      </Swiper>
        </div>
    );
};

export default Popularclass;