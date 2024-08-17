import React from 'react';
import tunde from '../../assest/logo.png';
import {dashBoardIcon} from '../data';
import {Link} from "react-router-dom"
import './sidebar.css'


const Sidebar = () => {
  return (
    <div className='sticky top-0 overflow-y-auto '>
      <div className='sidebarContainer h-[160vh] border-[1px] border-[#c5c8ca] overflow-y-auto'>
        <main className='flex items-center p-[12px] border-b-2 border-[#c5c8ca] static top-0 z-[20px] px-auto'>
          <div className='w-[50px]'>
            <img className='w-[100px] object-cover' src={tunde} alt="" />
          </div>
          <h3 className='ml-[10px] font-bold text-[20px] text-[#007bff]'>Verbum Dei</h3>
        </main>
        <main className='mt-[30px] border-b-2 border-[#c5c8ca]'>
          {dashBoardIcon.map((x) => (
            <Link to={`dashboard/${x.route}`} key={x.route}>
              <div className='flex pl-[30px] mb-[30px]'>
                <span className='mr-[10px] text-[20px]'>{x.icon}</span>
                <span className='text-[15px] font-[450]'>{x.name}</span>
              </div>
            </Link>
          ))}
        </main>
      </div>
    </div>

    
  )
}

export default Sidebar