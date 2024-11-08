
import React, { useState } from 'react'
import { useForm } from "react-hook-form";

import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { useAuth } from '../context/authContext';

export default function Register() {

const {registerUser,signInWithGoogle}=useAuth();
  const [message, setMessage] = useState("")

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

 const navigate=useNavigate();

  const onSubmit = async(data) => {
    // console.log(data)
    try {
        await registerUser(data.email, data.password);
        alert("User registered successfully!")
        navigate("/")
    } catch (error) {
       setMessage("Please provide a valid email and password") 
       console.error(error)
    }
  }


  const handleGoogoleSignIn=async ()=>{

    try {
      await signInWithGoogle();
    alert ("User registation Successfull");
    navigate("/")
    } catch (error) {
      setMessage("Please use a valid email ")
    }
  
  }


  return (
    <div className='h-[calc(100vh-150px)] border-solid border-slate-400 flex justify-center items-center'>

        <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>

<h2 className='font-semibold text-2xl mb-2 '>Create an account</h2>


        <form onSubmit={handleSubmit(onSubmit)}>

<div className='mb-4'>

  <label htmlFor='firstName' className='text-gray-500 font-semibold text-sm block  py-2'>First Name</label>

  <input {...register("firstName", { required: true })} type='text' name='firstName' placeholder='First Name' id='firstName' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'></input>

  <label htmlFor='lastName' className='text-gray-500 font-semibold text-sm block  py-2'>Last Name</label>

  <input {...register("lastName", { required: true })} type='text' name='lastName' placeholder='Last Name' id='lastName' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'></input>

  <label htmlFor='userName' className='text-gray-500 font-semibold text-sm block  py-2'>User Name</label>

  <input {...register("userName", { required: true })} type='text' name='userName' placeholder='User Name' id='userName' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'></input>
  
  <label htmlFor='email' className='text-gray-500 font-semibold text-sm block  py-2'>Email</label>

  <input {...register("email", { required: true })} type='email' name='email' placeholder='Enter Your Email' id='email' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'></input>

  <label htmlFor='password' className='text-gray-500 font-semibold py-2 text-sm block'>Password</label>

  <input {...register("password", { required: true })} type='password' name='password' placeholder='Enter Password' id='password' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'></input>
</div>
<div>
{
                    message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                }
<button className='btn-primary mt-4 mb-4 flex items-center justify-center w-full' >Register </button>
</div>

        </form>

        

       
        <p>Have an account?<Link to='/login'className='text-blue-500 hover:text-blue-700'>Login</Link></p>

        <button  onClick={()=>handleGoogoleSignIn()} className='btn-primary w-full mt-4 flex items-center justify-center ' ><FaGoogle className='mr-4' />Register With Google</button>

      </div>

    </div>
  )
}
