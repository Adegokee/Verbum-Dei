import React,{useState} from 'react';
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";
import profile from '../../assest/profile-avatar.png'
import { FaCaretDown } from "react-icons/fa";
import tunde from '../../assest/logo.png';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  return (
    <div className='flex h-[77px] border-2 border-[#c5c8ca] items-center bg-[#f5f9fc]'>
      <main className='flex items-center p-[12px] w-[282px] bg-[#f5f9fc] border-r-[1px] border-b-[1px] border-[#c5c8ca] z-[20px] px-auto'>
        <div className='w-[50px]'>
          <img className='w-[100px] object-cover' src={tunde} alt="Profile" />
        </div>
        <h3 className='ml-[10px] font-bold text-[20px] text-[#007bff]'>Verbum Dei</h3>
      </main>

      <main className='w-[50%] bg-[#f5f9fc] p-[10px]'>
        <a href="#" className='text-[15px] text-[#afb9d3]'>Home/Dashboard</a>
        <h2 className='font-bold text-[20px] text-[#007bff]'>Main Dashboard</h2>
      </main>

      <main className='flex justify-between w-[50%]'>
        <div className='border-[1px] rounded-md flex items-center border-[#c5c8ca] w-[300px] h-[40px] p-[3px] ml-[10px]'>
          <CiSearch />
          <input type="text" placeholder='Search...' className='ml-[10px] bg-[#f5f9fc] w-[260px] h-[100%] border-none outline-none rounded-md' />
        </div>
        <div className='relative'>
          <p className='absolute text-white bg-[#be463f] px-[2px] right-[-29px] text-center text-[10px] rounded-md'>3</p>
          <FaRegBell className='text-[30px] absolute top-[5px] z-2' />
        </div>
        <div className='relative flex items-center pr-[40px]'>
          <nav className='w-[40px]'>
            <img className='w-[100%] cursor-pointer' src={profile} alt="Profile" onClick={toggleDropdown} />
          </nav>
          <span className='ml-[10px] cursor-pointer' onClick={toggleDropdown}>Favour John</span>
          <span className='ml-[10px]' onClick={toggleDropdown}><FaCaretDown /></span>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className='absolute top-[47px] right-0 mt-[10px] w-[200px] bg-white border border-[#c5c8ca] shadow-lg rounded-md'>
           <a href="#" className='block px-[10px] py-[8px] text-black hover:bg-[#f0f0f0]'>Dashbord</a>
            
            <a href="#" className='block px-[10px] py-[8px] text-black hover:bg-[#f0f0f0]'>Profile</a>
           
           
              <a href="#" className='block px-[10px] py-[8px] text-black hover:bg-[#f0f0f0]'>Settings</a>
              <a href="#" className='block px-[10px] py-[8px] text-black hover:bg-[#f0f0f0]'>Logout</a>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Navbar