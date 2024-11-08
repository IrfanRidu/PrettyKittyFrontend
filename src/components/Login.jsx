import React, { useState } from 'react'
import { useForm } from "react-hook-form";

import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useAuth } from '../context/authContext';

export default function Login() {

  const [message, setMessage] = useState("");

  const navigate=useNavigate();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const {loginUser,signInWithGoogle}=useAuth();

  const onSubmit =async (data )=>{
try {
  await loginUser(data.email,data.password);
  alert ("Login Successfull");
  navigate("/")
} catch (error) {
  setMessage("Please provide a valid email and password") 
      
}
  }

const handleGoogoleSignIn=async ()=>{

  try {
    await signInWithGoogle();
  alert ("Login Successfull");
  navigate("/")
  } catch (error) {
    setMessage("Please use a valid email ")
  }

}


  return (
    <div className='h-[calc(100vh-150px)] border-solid border-slate-400 flex justify-center items-center'>

        <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>

<h2 className='font-semibold text-2xl mb-2 '>Login </h2>


        <form onSubmit={handleSubmit(onSubmit)}>

<div className='mb-4'>

  <label htmlFor='email' className='text-gray-500 font-semibold text-sm block  py-2'>Email</label>

  <input {...register("email", { required: true })} type='email' name='email' placeholder='Enter Your Email' id='email' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'></input>

  <label htmlFor='password' className='text-gray-500 font-semibold py-2 text-sm block'>Password</label>

  <input {...register("password", { required: true })} type='password' name='password' placeholder='Enter Password' id='password' className='hadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'></input>
</div>
<div>
{
                    message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                }
<button className='btn-primary mt-4 mb-4 flex items-center justify-center w-full' >Login </button>
</div>

        </form>

        

       
        <p>Don't have any account?<Link to='/register'className='text-blue-500 hover:text-blue-700'>register now</Link></p>

        <button onClick={()=>handleGoogoleSignIn()} className='btn-primary w-full mt-4 flex items-center justify-center ' ><FaGoogle className='mr-4' />Login With Google</button>

      </div>

    </div>
  )
}
