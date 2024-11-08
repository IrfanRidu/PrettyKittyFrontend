import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';

import getBaseUrl from '../utils/getBaseUrl'



export default function AdminLogin() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const navigate=useNavigate();

    const [message, setMessage] = useState("");

    


 

    const onSubmit =async (data )=>{
  try {
    const response =  await axios.post(`${getBaseUrl()}/api/auth/admin`, data, {
        headers: {
            'Content-Type': 'application/json',
        }
   })
   const auth = response.data;
//    console.log(auth)
    if(auth.token) {
        localStorage.setItem('token', auth.token);
        setTimeout(() => {
            localStorage.removeItem('token')
            alert('Token has been expired!, Please login again.');
            navigate("/")
        }, 3600 * 1000)
    }

    alert("Admin Login successful!")
    navigate("/dashboard")
   
    }
     catch (error) {
     
    setMessage("Please provide a valid email and password")     
  }
    }
  
 


  return (
    <div className='h-[calc(100vh-150px)] border-solid border-slate-400 flex justify-center items-center'>

    <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>

<h2 className='font-semibold text-2xl mb-2 '> Admin Login </h2>


    <form onSubmit={handleSubmit(onSubmit)}>

<div className='mb-4'>

<label htmlFor='username' className='text-gray-500 font-semibold text-sm block  py-2'>Username</label>

<input {...register("username", { required: true })} type='text' name='username' placeholder='Enter Your Username' id='username' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'></input>

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

  </div>

</div>
  )
}
