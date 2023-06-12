import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const InstructorHome = () => {
    return (
        <div>
             <p className='text-3xl'>  <Slide>Welcome to Instructor Dash Board</Slide></p>
             <Fade delay={1e3} cascade damping={1e-1}>
       Easily add your new class and manage your classes
      </Fade>
        </div>
    );
};

export default InstructorHome;