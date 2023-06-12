import React from 'react';

const ExtraSection = () => {
    return (
        <div className='lg:mx-28 mx-0 lg:mt-10 bg-gray-700 py-10 rounded-xl my-20'>
        <div  data-aos="zoom-out-left" className='lg:flex items-center gap-14 '>
          <div className='lg:px-24 mx-4'>
              {/* <img className='w-10 py-5' src={iconhead} alt="" /> */}
              <p style={{fontWeight:"700"}} className='lg:text-4xl 
   tracking-tight text-medium  my-component text-3xl text-black pb-8 '>Who Can Benefit?</p>
              <p className=' text-white headerText'>Amplify your musical skills with expert guidance from experienced instructors.
Explore a wide range of musical genres and instruments, fostering creativity and versatility.
Develop strong foundational techniques that will pave the way for a lifelong musical journey. <br />
              <br /> Engage in collaborative learning environments, forging connections with fellow passionate musicians.
Expand your musical horizons through exciting workshops, performances, and guest artist sessions.
Cultivate confidence, discipline, and self-expression as you embark on a transformative musical adventure.. <br /></p>

          </div>
          {/* <img className='w-[462px] h-[660] ' src={discuss} alt="" /> */}
          </div>  
          <div  data-aos="zoom-out-right" className='flex lg:flex-row-reverse flex-col items-center gap-14 lg:my-10'>
              <div className='lg:px-24 mx-4'>
                  {/* <img className='w-10 py-5 ' src={handshake} alt="" /> */}
                  <p style={{fontWeight:"700"}} className='lg:text-4xl 
   tracking-tight text-medium  my-component text-3xl text-black pb-8 '>Choose a Friend, not an Instructor</p>
                  <p className=' text-white headerText'>oster a supportive and encouraging learning environment where growth is nurtured alongside friendship.
Share musical experiences together, creating memories and bonding over shared passions.
Collaborate and jam with your friend, exploring new musical styles and expanding your repertoire.
Motivate and inspire each other, pushing boundaries and striving for excellence in your musical journeys.
Provide feedback and constructive criticism, helping each other improve and refine your skills.</p>
              </div>
              {/* <img className='w-[462px] h-[660] ms-10 ps-10'   src={discuss2} alt="" /> */}


          </div>
      </div>
    );
};

export default ExtraSection;