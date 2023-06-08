import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/Authprovider';
const Login = () => {


    const {logintoAccount}=useContext(AuthContext)
    const handlesubmit=(event)=>{
        event.preventDefault()
        const form =event.target
        const email=form.email.value
        const password=form.password.value
        logintoAccount(email,password)
        .then(result=>{
            const user =result.user
            console.log(user)
        })
    }

    return (
    <div className='grid justify-items-center mb-40'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handlesubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type='submit' value="suubmit" className="btn btn-primary"/>
        </div>
      </form>
      <p><small>New to Rhythm Maniac?<Link to='/signup'>Sign up</Link></small></p>
    </div>
    </div>
    );
};

export default Login;