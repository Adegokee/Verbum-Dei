import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaRegBell } from 'react-icons/fa6';
import profile from '../../assest/profile-avatar.png'; // Note: Corrected path from 'assest' to 'assets'
import { FaCaretDown } from 'react-icons/fa';
import tunde from '../../assest/logo.png';
import { Link } from 'react-router-dom';

const Navbar = ({ userInfo, handleLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Fallback for userInfo if it's null or undefined
  const profileImage = userInfo && userInfo.profile_image ? userInfo.profile_image : profile;

  return (
    <div className='flex h-[77px] border-2 border-[#c5c8ca] items-center bg-[#f5f9fc]'>
      <div className='flex items-center p-[12px] w-[250px] bg-[#f5f9fc] border-r-[1px] border-b-[1px] border-[#c5c8ca] z-[20]'>
        <img className='w-[50px] object-cover' src={tunde} alt="Logo" />
        <Link to='/' className='ml-[10px] font-bold text-[20px] text-[#007bff]'>
          Verbum Dei
        </Link>
      </div>

      <div className='w-[50%] bg-[#f5f9fc] p-[10px]'>
        <a href="#" className='text-[15px] text-[#afb9d3]'>Home/Dashboard</a>
        <h2 className='font-bold text-[20px] text-[#007bff]'>Main Dashboard</h2>
      </div>

      <div className='flex justify-between w-[50%]'>
        <div className='border-[1px] rounded-md flex items-center border-[#c5c8ca] w-[300px] h-[40px] p-[3px] ml-[10px]'>
          <CiSearch />
          <input type="text" placeholder='Search...' className='ml-[10px] bg-[#f5f9fc] w-[260px] h-full border-none outline-none rounded-md' />
        </div>
        
        <div className='relative'>
          <p className='absolute text-white bg-[#be463f] px-[2px] right-[-29px] text-center text-[10px] rounded-md'>3</p>
          <FaRegBell className='text-[30px] absolute top-[5px] z-2' />
        </div>

        <div className='relative flex items-center pr-[40px]'>
          <img
            className='w-[40px] h-[40px] cursor-pointer ml-4 rounded-full'
            src={profileImage}
            alt="Profile"
            onClick={toggleDropdown}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          />
          <span className='ml-[20px] cursor-pointer' onClick={toggleDropdown}>Favour John</span>
          <FaCaretDown className='ml-[10px] cursor-pointer' onClick={toggleDropdown} />

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className='absolute top-[47px] right-0 mt-[10px] w-[200px] bg-white border border-[#c5c8ca] shadow-lg rounded-md z-10'>
              <Link to='/dashboard' className='block px-[10px] py-[8px] text-black hover:bg-[#f0f0f0]'>Dashboard</Link>
              <a href="#" className='block px-[10px] py-[8px] text-black hover:bg-[#f0f0f0]'>Profile</a>
              <a href="#" className='block px-[10px] py-[8px] text-black hover:bg-[#f0f0f0]'>Settings</a>
              {userInfo && (
                 <a href="#" className='block px-[10px] py-[8px] text-black hover:bg-[#f0f0f0]' onClick={handleLogout}>Logout</a>
              )}
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
