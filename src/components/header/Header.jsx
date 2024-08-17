import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import Chart from '../Chart'
import Dashboard from '../dashboard/Dashboard'
// import './header.css'
const Header = () => {
  return (
    <>
   
    <div className=' flex w-[100%] '>
       <div className='w-[16%]'>
       <Sidebar />
        </div> 
      
      <div className='w-[84%] '>
      <Navbar/>
      </div>

      
    </div>
   
    </>
   
  )
}

export default Header