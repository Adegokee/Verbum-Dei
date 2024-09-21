import React, {useState} from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import Chart from '../Chart'
import Dashboard from '../dashboard/Dashboard'
// import './header.css'
const Header = ({userInfo, setUserInfo}) => {
 
  return (
    <>
   
    <div className='  w-[100%] '>
      
      
      <div className='w-[100%] sticky top-0 z-[1000] '>
      <Navbar userInfo={userInfo} setUserInfo={setUserInfo}/>
      </div>

       <div className='w-[16%]'>
       <Sidebar  />
        </div> 

      
    </div>
   
    </>
   
  )
}

export default Header