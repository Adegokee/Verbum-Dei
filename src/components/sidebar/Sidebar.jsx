import React, {useState} from 'react';
import tunde from '../../assest/logo.png';
import {dashBoardIcon} from '../data';
import {Link} from "react-router-dom"
import './sidebar.css'
import profile from '../../assest/profile-avatar.png'
import { FaCaretDown } from "react-icons/fa";


const Sidebar = ({userInfo}) => {
let [active, setActive] = useState('active')
const [dropdownOpen, setDropdownOpen] = useState(false);

const toggleDropdown = () => {
  setDropdownOpen(prev => !prev);
}; const profileImage = userInfo && userInfo.profile_image ? userInfo.profile_image : profile;
const firstNAme = userInfo && userInfo.first_name ? userInfo.first_name : 'user';

  return (
    <div className=''>
      <div className='sidebarContainer h-[160vh] border-r-[1px] border-[#c5c8ca] overflow-y-auto'>
       
        <main className='mt-[50px] mx-[3px] border-b-2 border-[#c5c8ca]'>
          {dashBoardIcon.map((x) => (
            <Link to={`${x.route}`} key={x.route}>
              <div className={`flex items-center px-4 py-2 mb-2 rounded-md cursor-pointer ${
                    x.name === active ? 'bg-blue-700 text-white' : 'text-gray-700 hover:bg-blue-700 hover:text-white'
                  }`} >
                <span className='mr-[5px] text-[20px]'>{x.icon}</span>
                <span className='text-[12px] font-[490]'>{x.name}</span>
              </div>
            </Link>
          ))}
        </main>

        <div className='relative flex items-center ml-[10px] mt-[60px] pr-[40px]'>
          <nav className='w-[40px]'>
            <img className='w-[100%] cursor-pointer' src={profileImage} alt="Profile" onClick={toggleDropdown} />
          </nav>
          <span className='ml-[10px] cursor-pointer' onClick={toggleDropdown}>{firstNAme}</span>
          <span className='ml-[10px]' onClick={toggleDropdown}><FaCaretDown /></span>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className='absolute top-[47px] right-0 mt-[10px] w-[200px] bg-white border border-[#c5c8ca] shadow-lg rounded-md'>
           <Link to='/dashboard' className='block px-[10px] py-[8px] text-black hover:bg-[#f0f0f0]'>Dashbord</Link>
            
            <a href="#" className='block px-[10px] py-[8px] text-black hover:bg-[#f0f0f0]'>Profile</a>
           
           
              <a href="#" className='block px-[10px] py-[8px] text-black hover:bg-[#f0f0f0]'>Settings</a>
              <a href="#" className='block px-[10px] py-[8px] text-black hover:bg-[#f0f0f0]'>Logout</a>
            </div>
          )}
        </div>
      </div>
    </div>

    
  )
}

export default Sidebar