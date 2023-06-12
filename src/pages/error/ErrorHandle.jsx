import React from 'react';
// import { useRouteError } from 'react-router-dom';

// import React from 'react';
import {Link, useRouteError} from 'react-router-dom'

import errorpic from '../../assets/isometric-error.png'

const ErrorHandle = () => {
    const {error,status}=useRouteError()
    return (
        <div>
        <Link  className='bg-red-800 w-12 text-white text-4xl' to='/'> go to home page</Link>
            <p>{error?.msessage}</p>
            <p className='flex justify-center'>{status ||  <img className='w-[600px] ' src={errorpic} alt="" /> }</p>


        </div>
    );
    
};

export default ErrorHandle;


