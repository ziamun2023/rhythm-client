import React from 'react';
import Banner from '../../component/banner/Banner';
import Popularclass from '../../component/popularClasss/Popularclass';

const Home = () => {
    return (
        <div  className='mx-20'>
            <Banner/>
            <Popularclass/>
        </div>
    );
};

export default Home;