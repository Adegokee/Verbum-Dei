import React, {useState} from 'react';
import tunde from '../../assest/logo.png';
import {dashBoardIcon} from '../data';
import {Link} from "react-router-dom"
import './sidebar.css'
import profile from '../../assest/profile-avatar.png'
import { FaCaretDown } from "react-icons/fa";


const Sidebar = () => {
let [active, setActive] = useState('active')
const [dropdownOpen, setDropdownOpen] = useState(false);

const toggleDropdown = () => {
  setDropdownOpen(prev => !prev);
};

  return (
    <div className=''>
      <div className='sidebarContainer h-[160vh] border-r-[1px] border-[#c5c8ca] overflow-y-auto'>
       
        <main className='mt-[50px] mx-[3px] border-b-2 border-[#c5c8ca]'>
          {dashBoardIcon.map((x) => (
            <Link to={`${x.route}`} key={x.route}>
              <div  className='flex pl-[30px] rounded-[4px] mb-[10px] hover:text-white' onClick={() => setActive(x.name)}  style={{background: x.name === active && '#588efe', color: 'black',  padding:'10px'}} >
                <span className='mr-[5px] text-[20px]'>{x.icon}</span>
                <span className='text-[15px] font-[450]'>{x.name}</span>
              </div>
            </Link>
          ))}
        </main>

        <div className='relative flex items-center ml-[10px] mt-[60px] pr-[40px]'>
          <nav className='w-[40px]'>
            <img className='w-[100%] cursor-pointer' src={profile} alt="Profile" onClick={toggleDropdown} />
          </nav>
          <span className='ml-[10px] cursor-pointer' onClick={toggleDropdown}>Favour John</span>
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