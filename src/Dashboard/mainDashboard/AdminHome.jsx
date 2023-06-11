import React from 'react';
import { Fade, Hinge, Slide, Zoom } from "react-awesome-reveal";
const AdminHome = () => {
    return (
        <div >
              <Slide>
        <h1 className='text-4xl'>Admin Panel</h1>
      </Slide>
      <Fade delay={1e3} cascade damping={1e-1}>
        Controll Instructor and user
      </Fade>
        </div>
    );
};

export default AdminHome;