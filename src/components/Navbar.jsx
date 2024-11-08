import React, { useState } from 'react'
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import user from "../assets/doctor.png"
import Logo  from "../assets/logo.png"
import { useSelector } from 'react-redux';
import { useAuth } from '../context/authContext';
const navigation =[
    {name:"Dashboard",href:"/dashboard"},
    {name:"Shop",href:"/shop"},
    {name:"Orders",href:"/orders"},
    {name:"Chack out",href:"/chackout"},
    
]
export default function Navbar() {

    const [isDropdown,setIsDropdown]=useState(false)
   
const cartItems=useSelector(state=>state.cart.cartItems)

const {currentUser,logout}=useAuth();


const handleLogOut=()=>{
    logout();
}

  return (
   
    
      <header className='max-w-full px-4 py-1 mx-auto bg-black sticky top-0 z-50'>

<nav className='flex justify-between items-center  '>

    <div className='flex items-center md:gap-16 gap-4'>
       
       <Link to="/"><img src={Logo} alt="Logo" className=" w-36" /></Link>
        

        <div className='relative sm:w-72 w-40 space-x-2'>

        <IoSearchOutline className='absolute inline-block left-3 inset-y-2 ' />

        <input type='text'placeholder='Search Here' className='bg-[#EAEAEA] py-1 w-full md:px-8 px-6 rounded-md focus:outline-none'/>

        </div>
    </div>


    <div className='flex items-center md:gap-5 gap-4'>

    <div>
{ 
    currentUser ?
    
    <>
    <button onClick={()=>setIsDropdown(!isDropdown)}>

        <img src={user}alt=''className={`size-7 rounded-full ${currentUser ? "ring-2 ring-yellow-500 ":""}  `}></img>
        
        </button>

        {
            isDropdown &&
            (
                <div className='absolute  bg-primary mt-2 w-48 rounded-md shadow-lg z-40 '>
                <ul className='py-2'>
                    {
                        navigation.map((item)=>(<li key={item.name}><Link onClick={()=>setIsDropdown(false)} to={item.href} className='text-sm block px-4 py-2 hover:bg-black hover:text-white'>{item.name}</Link></li>))
                    }
                    <li>
   <button onClick={handleLogOut}
 className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Logout</button>
 </li>
                </ul>
                </div>
            )
        }
        
        </>

       
    
    : <Link  to= "/login"><LuUser2 className='text-yellow-500 ' /></Link>
}

    </div>

    <button className='hiddeen sm:block'><FaRegHeart className='size-5 text-yellow-500 ' /></button>

    <Link to="/cart" className='flex items-center bg-primary p-1 sm:px-6 px-2 rounded-sm'><BsFillCartFill className='size-4'/><span className='sm:ml-1 text-sm font-semibold'>{cartItems.length}</span></Link>
    
</div>

</nav>

      </header>
    
  )
}
