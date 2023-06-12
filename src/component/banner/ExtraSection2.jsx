import React from 'react';
import img1 from '../../assets/Untitled (500 × 700px).png'
import img2 from '../../assets/Untitled (500 × 700px) (1).png'
import img3 from '../../assets/Untitled (500 × 700px) (2).png'
import img4 from '../../assets/Untitled (500 × 700px) (3).png'
import img5 from '../../assets/Untitled (1280 × 500px).png'
const ExtraSection2 = () => {
    return (
        <div className='grid lg:grid-cols-2'>
            <div>
<img className='w-60' src={img5} alt="" />
<p className='text-4xl font-semibold text-white bg-gray-700 rounded-xl'>
"Life without playing music is inconceivable to me. I live my daydreams in music. I see my life in terms of music."


</p>
            </div>
            <div className=''>
            <div className="carousel carousel-center  rounded-box ">
  <div className="carousel-item ">
    <img className='w-72 mx-4  bg-white' src={img1} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='w-72 mx-4  bg-white' src={img2} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='w-72 mx-4  bg-white' src={img3} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='w-72 mx-4  bg-white' src={img4} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='w-72 mx-4  bg-white' src={img2} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='w-72 mx-4  bg-white' src={img1} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='w-72 mx-4  bg-white' src={img4} alt="Pizza" />
  </div>
</div>
            </div>
        </div>
    );
};

export default ExtraSection2;