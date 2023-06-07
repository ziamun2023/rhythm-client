import React from 'react';
import  { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import brain from '../../assets/bloom-artificial-intelligence.png'
import skill from '../../assets/shine-hands-holding-light-bulb-magnifying-glass-pencil-and-coin-1.png'
import bookchildren from '../../assets/3d-casual-life-girl-with-books-and-backpack-1.png'
// import required modules
import { Pagination } from "swiper";
import ReactTypingEffect from 'react-typing-effect';
import bannerphoto from '../../assets/casual-life-3d-three-quarter-view-of-radio.png'
const Banner = () => {
    return (
        <div className='grid lg:grid-cols-3  '>
<div className='col-span-1 text-3xl'>
<div className=' rounded-lg h-[400px] w-[400px] '>
<img className='w-[400px]  pt-10 ps-5  ' src={bannerphoto} alt="" />
</div>
{/* auto text */}

<>
      <ReactTypingEffect
        text={["Discover ", "the Joy of Music."]}
      />

      <br />

      <ReactTypingEffect
        text={["Empowering Young", " Musicians!!!"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i%2 === 0 ? { color: 'magenta'} : {}}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
    </>

{/* auto text */}





</div>
<div className='col-span-2 nav rounded-2xl  mt-10'>
<Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className='flex'>
          <img className='w-[300px] py-10 opacity-25 my-auto' src={brain} alt="" />
                
                <p className='text-4xl my-auto text-gray-900  leading-snug font-medium'>
                Boosts Cognitive Development: Learning a musical instrument enhances cognitive abilities such as memory, attention, and problem-solving skills.
                </p>
          </div>
       
        </SwiperSlide>
        <SwiperSlide>       <div className='flex'>
          <img className='w-[350px] py-20 opacity-25 my-auto' src={skill} alt="" />
                
                <p className='text-4xl my-auto text-gray-900  leading-snug font-medium'>
                Enhances Fine Motor Skills: Playing an instrument requires precise finger movements, which can improve fine motor skills and hand-eye coordination
                </p>
          </div></SwiperSlide>
        <SwiperSlide>       <div className='flex'>
          <img className='w-[350px] py-24 opacity-25' src={bookchildren} alt="" />
                
                <p className='text-4xl my-auto text-gray-900  leading-snug font-medium'>
                Stimulates Creativity: Music encourages self-expression and fosters creativity, allowing children to explore their imagination and develop their unique musical style.
                </p>
          </div></SwiperSlide>
        <SwiperSlide>      <div className='flex'>
          <img className='w-[300px] py-10 opacity-25' src={brain} alt="" />
                
                <p className='text-4xl my-auto  text-gray-900  leading-snug font-medium'>
                Boosts Cognitive Development: Learning a musical instrument enhances cognitive abilities such as memory, attention, and problem-solving skills.
                </p>
          </div></SwiperSlide>
      
      </Swiper>
</div>
        </div>
    );
};

export default Banner;