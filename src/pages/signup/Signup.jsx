import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateStudentProfile } = useContext(AuthContext);
    const navigate = useNavigate();
     
    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateStudentProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/studentProfile', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })
    };
















    // const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // const { createUser ,updateStudentProfile ,googleSignin} = useContext(AuthContext);
    // const navigate=useNavigate()
    // const location=useLocation()

    // const from =location.state?.from?.pathname || '/'
    // const onSubmit = data => {

    //     createUser(data.email, data.password)
    //         .then(result => {

    //             const loggedUser = result.user;
    //             console.log(loggedUser);
                
    //             updateStudentProfile(data.name, data.photoURL)
    //             .then(()=>{
    //                 const saveStudentProfile={name: data.name,email:data.email}
                
    //                 fetch('http://localhost:5000/studentProfile',{
    //                     method:"POST",
    //                     headers:{
    //                         'content-type':'application/json'
    //                     },
    //                     body: JSON.stringify(saveStudentProfile)
    //                 })
    //                 .then(res=>res.json())
    //                 .then(data=>{
    //                     if(data.insertedId){
    //                         reset();
    //                         Swal.fire({
    //                             position: 'top-end',
    //                             icon:'success',
    //                             title:'user created successfully',
    //                             showConfirmButton: false,
    //                             timer: 1500
    //                         })
    //                         Navigate('/')
    //                     }
    //                 })
    //             })
    //         })
    //         .catch(error => console.log(error))}






            const handleGoogleSignIn = () => {
                googleSignin()
                    .then(result => {
                        const userLogin = result.user;
                        console.log(userLogin);
                        const saveUser = { name: userLogin.displayName, email: userLogin.email }
                   
                        fetch('http://localhost:5000/studentProfile', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(() => {
                                navigate(from, { replace: true });
                            })
                    })
            }
        

    return (
        <div>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <button onClick={handleGoogleSignIn}>google sign in</button>
        </div>
    );
};

export default Signup;