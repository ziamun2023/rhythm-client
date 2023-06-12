import React from 'react';
import Banner from '../../component/banner/Banner';
import Popularclass from '../../component/popularClasss/Popularclass';
import PopularInstructor from '../../component/popularinstructor/PopularInstructor';

const Home = () => {
    return (
        <div  className=' mx-20 '>
              <Banner/> 
            <Popularclass/>
            <PopularInstructor></PopularInstructor>
         <div class="" >
         <ul class="circles">
          
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
  </ul>
    </div >
        
        </div>
    );
};

export default Home;