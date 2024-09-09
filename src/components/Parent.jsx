import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { HiDotsHorizontal } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import pict from '../assest/logo.png'

const Parent = ({ parent, errors }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = parent.slice(firstIndex, lastIndex); // Assuming 'parent' holds the list of parent data
  const npage = Math.ceil(parent.length / recordsPerPage);
  const pageNumbers = [...Array(npage).keys()].map(n => n + 1);

  const prePage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage < npage) setCurrentPage(currentPage + 1);
  };

  const changeCPage = (page) => {
    setCurrentPage(page);
  };

  const Dropdown = ({ label, children }) => (
    <div className="dropdown">
      <button className="dropdown-button">{label}</button>
      <div className="dropdown-menu">{children}</div>
    </div>
  );

  return (
    <div className=" dashboard  absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px]">
      
      <div className="dropdown-container">
        <Dropdown label="All">
          <div className="dropdown-item">Option 1</div>
          <div className="dropdown-item">Option 2</div>
        </Dropdown>
        <Dropdown label="Select Date">
          <div className="dropdown-item">Option A</div>
          <div className="dropdown-item">Option B</div>
        </Dropdown>
        <div className='bg-white w-[300px] flex items-center rounded-md'>
          <CiSearch className='text-[16px] ml-[5px]' />
          <input type="text" className="input-field ml-[10px] outline-none w-[270px]" placeholder="Search Students List" />
        </div>
        <Link to="/create_parent" className='w-[250px] bg-blue-700 text-center rounded-md text-white pt-[8px]'>
          Create Student
        </Link>
      </div>

      {/* Table Header */}
      <div className='bg-[#f5f9fc] border-b-2 flex border-[#d9d6d6] h-[40px]'>
        <main className='h-[100%] w-[100px] border-b-2 border-[#0c7eff] text-[#0c7eff] '>
          <a href="#" className='pl-[10px] font-semibold'>All Students</a>
        </main>
    
      </div>

      {/* Parent Data Table */}
      <nav>
        <main className='mt-[20px] flex justify-between items-center border-b-2 border-[gray] py-[20px]'>
          <div className='pr-[0px]'>
            <input type="checkbox" />
            <span className='ml-[10px]'>Name</span>
          </div>
          <div className='pr-[10px]'>
            <span className='ml-[0px]'>Phone Number</span>
          </div>
          <div className='pr-[5px]'>
          
            <span className='ml-[0px]'>Address</span>
          </div>
          <div className='pr-[0px]'>
    
            <span className='ml-[0px]'>Call</span>
          </div>
          <div className='pr-[0px]'>
    
    <span className='ml-[10px]'>Text</span>
  </div>

     
        </main>

     
        {records.map((x) => (
          <Link key={x.id} to={`/student-management/${x.id}`}>
            <main className='mt-[20px] flex justify-between items-center border-b-2 border-[gray] py-[20px]'>
              <div className='flex items-center'>
                <input type="checkbox" className='mr-[12px]' />
                <span className='ml-[5px] font-semibold'>{x.parent_name.slice(0,10)}</span>
              </div>
              <div>
                <small className='font-semibold'>#{x.phone_number_1}</small>
              </div>
              <div>
                <small className='font-semibold'>{x.home_address.slice(0, 20)}...</small>
              </div>
              <div className='flex items-center'>
                <span className='mr-[10px] text-[#007bff] py-[10px] px-[5px] rounded-2xl bg-[#d6dfe8]'><FaPhone /></span>
                
              </div>
              <div className='flex items-center'>
               
                <span className="text-[#007bff] text-[20px] py-[10px] px-[15px] rounded-2xl bg-[#d6dfe8]"><TiMessages /></span>
              </div>
              
              {/* <div className='font-semibold'>
                <HiDotsHorizontal />
              </div> */}
            </main>
          </Link>
        ))}
      </nav>

      {/* Pagination Controls */}
      <nav aria-label="Page navigation example" className="flex justify-end w-full mt-[7px]">
        <ul className="inline-flex text-sm mt-[15px]">
          <li>
            <button
              onClick={prePage}
              disabled={currentPage === 1}
              className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
            >
              Previous
            </button>
          </li>
          {pageNumbers.map((n) => (
            <li key={n}>
              <button
                onClick={() => changeCPage(n)}
                className={`flex items-center justify-center h-8 px-3 border ${currentPage === n ? 'text-blue-600 bg-blue-50' : 'text-gray-500 bg-white'} border-gray-300 hover:bg-blue-100 hover:text-blue-700`}
              >
                {n}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={nextPage}
              disabled={currentPage === npage}
              className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Parent;
