import React from 'react';
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";
import profile from '../../assest/profile-avatar.png'
import { FaCaretDown } from "react-icons/fa";
import tunde from '../../assest/logo.png';

const Navbar = () => {
  return (
    <div className='flex h-[77px]  border-2 border-[#c5c8ca] items-center  bg-[#f5f9fc] '>
       <main className='flex items-center p-[12px] w-[282px]  bg-[#f5f9fc] border-r-[1px] border-b-[1px] border-[#c5c8ca]  z-[20px] px-auto'>
          <div className='w-[50px]'>
            <img className='w-[100px] object-cover' src={tunde} alt="" />
          </div>
          <h3 className='ml-[10px] font-bold text-[20px]  text-[#007bff]'>Verbum Dei</h3>
        </main>
  
    <main className='w-[50%] bg-[#f5f9fc] p-[10px]'>
      <a href="" className='text-[15px] text-[#afb9d3]'>Home/Dashboard</a>
      <h2 className='font-bold text-[20px] text-[#007bff]'>Main Dashboard</h2>
    </main>

    <main className='flex justify-between w-[50%]   '>
      <div className='border-[1px] rounded-md flex items-center border-[#c5c8ca] w-[300px] h-[40px] p-[3px] ml-[10px]'>
      <CiSearch />
        <input type="text" placeholder='Search...' className='ml-[10px] bg-[#f5f9fc]  w-[260px] h-[100%] border-none outline-none rounded-md' />
      </div>
      <div className='relative'>
          <p className=' absolute text-white bg-[#be463f] px-[2px] right-[-29px] text-center text-[10px] rounded-md'>3</p>
          <FaRegBell className='text-[30px] absolute top-[5px] z-2' />

        </div>
      <div className='flex items-center' >
     
        <div className='flex items-center pr-[40px]'>
         <nav className='w-[40px]'>
            <img className='w-[100%]' src={profile} alt="" />
          </nav>
         <span className='ml-[10px]'>Favour John</span>
         <span className='ml-[10px]'><FaCaretDown /></span>
         
        </div>
      </div>
      
    </main>

    </div>
  )
}

export default Navbar