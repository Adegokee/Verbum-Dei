import React from 'react';
import {Link} from 'react-router-dom'
import { FaFileExport } from "react-icons/fa6";

const FeesAndPayment = () => {
  return (
    <div className='dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] '>
      <h2 className="text-[#007bff] font-bold text-[18px] p-[10px]">Fees & Payment</h2>
      
     <nav className="flex items-center justify-between w-[100%]">
     <div className='ml-[10px]'>
       <Link className='mr-[16px] text-[#007bff] text-[15px] border-b-2 border-[#007bff] '>
            Reports
       </Link>
       <Link className='mr-[16px] text-[15px]'>
          School Fees 
       </Link>
       <Link className='mr-[16px] text-[15px]'>
            Library
       </Link>
       <Link className='mr-[10px] text-[15px]'>
            Medicals
       </Link>
       
      
      </div>


      <div >
            <main className='flex bg-[#007bff] rounded-md items-center px-[30px] py-[8px] text-white w-[160px]' >
            <FaFileExport className='mr-[10px]' />
            <p>Export</p>
            </main>
      </div>
     </nav>


     
<div className="w-full max-w-sm p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-6">
  <div className="flex justify-between">
    <div>
      <h5 className="pb-2 text-3xl font-bold leading-none text-gray-900 dark:text-white">32.4k</h5>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">Users this week</p>
    </div>
    <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
      12%
      <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13V1m0 0L1 5m4-4 4 4" />
      </svg>
    </div>
  </div>
  <div id="area-chart" />
  <div className="grid items-center justify-between grid-cols-1 border-t border-gray-200 dark:border-gray-700">
    <div className="flex items-center justify-between pt-5">
      {/* Button */}
      <button id="dropdownDefaultButton" data-dropdown-toggle="lastDaysdropdown" data-dropdown-placement="bottom" className="inline-flex items-center text-sm font-medium text-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" type="button">
        Last 7 days
        <svg className="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
        </svg>
      </button>
      {/* Dropdown menu */}
      <div id="lastDaysdropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90 days</a>
          </li>
        </ul>
      </div>
      <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-semibold text-blue-600 uppercase rounded-lg hover:text-blue-700 dark:hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
        Users Report
        <svg className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
        </svg>
        
      </a>
    </div>
  </div>
 
</div>


<h1 className='text-[red]'> Page Still Under Development</h1>
    </div>
  )
}

export default FeesAndPayment