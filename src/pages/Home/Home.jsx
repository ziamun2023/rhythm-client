import React from 'react';
import Banner from '../../component/banner/Banner';
import Popularclass from '../../component/popularClasss/Popularclass';
import PopularInstructor from '../../component/popularinstructor/PopularInstructor';
import ExtraSection from '../../component/ExtraSection';
import ExtraSection2 from '../../component/banner/ExtraSection2';

const Home = () => {
    return (
        <div  className=' mx-20 '>
              <Banner/> 
            <Popularclass/>
            <PopularInstructor></PopularInstructor>
            <ExtraSection></ExtraSection>
            <ExtraSection2></ExtraSection2>
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