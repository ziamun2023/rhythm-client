import React, { useContext } from 'react';
import { AuthContext } from '../../provider/Authprovider';
import { useForm } from "react-hook-form";
import { Link  } from 'react-router-dom'
const Signup = () => {
    const {NewUser}= useContext(AuthContext)
    console.log(NewUser)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const {createNewUser}=useContext(AuthContext)
    const onSubmit = data =>{
        NewUser(data.email,data.password)
        .then(result=>{
            const newuser=result.user
            console.log(newuser)
        })
console.log(data)

    };
// const handleSubmit=event=>{

// }

    return (
        <div className='grid justify-items-center mb-40'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input name='name' type="text" placeholder="name"{...register("name", { required: true })}  className="input input-bordered" />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" {...register("email", { required: true })}  placeholder="email" className="input input-bordered" />
          {errors.password?.type === 'required' && <span>email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" {...register("password", { required: true,minLength:6, maxLength: 20,
             pattern:/(?=.*[A-Z])(?=.*[!@#$&*])/ })}
               placeholder="password" className="input input-bordered" />
          {errors.password?.type === 'required' && <span>password required</span>}
          {errors.password?.type === 'pattern' && <span>password must have one uppercase charecter and must have a special charecter</span>}
          {errors.password?.type === 'minLength' && <span>Minimum 6 charecter</span>}
          {errors.password?.type === 'maxLength' && <span>Password can not exceed 20 charecter</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type='submit' value="sign up" className="btn btn-primary"/>
        </div>
      </form>
      <p><small>already have an account ? <Link to='/login'>Log in</Link></small></p>
    </div>
    </div>
    );
};

export default Signup;