import React, {useState} from 'react';
import profile from '../assest/profile-avatar.png'
import { FaCaretDown } from "react-icons/fa";
import {Link} from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import student from '../assest/high-res-student-smiling.jpg'
import { FaPhone } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { HiDotsHorizontal } from "react-icons/hi";
import { myData } from './data';

const StudentManagement = ({ mydata, setMydata }) => {
  const Dropdown = ({ label, children, label2, }) => (
    <div className="dropdown">
     
      {/* <button className="dropdown-button2">{label2}</button> */}
      <button className=" dropdown-button">{label}</button>
      <div className="dropdown-menu">
        {children}
      </div>
    </div>
  );
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6; 
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = mydata.slice(firstIndex, lastIndex); 
  const npage = Math.ceil(mydata.length / recordsPerPage);
  const numbers = [...Array(npage).keys()].map(n => n + 1);

  const prePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="dashboard   absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px] ">
      
    <div className="dropdown-container">
  <Dropdown label="All" className="">
    <div className="dropdown-item">Option 1</div>
    <div className="dropdown-item">Option 2</div>
    <div className="dropdown-item">Option 2</div>
  </Dropdown>
  <Dropdown label="Select Date">
    <div className="dropdown-item">Option A</div>
    <div className="dropdown-item">Option B</div>
    <div className="dropdown-item">Option 2</div>
  </Dropdown>
  <div  className='bg-white w-[300px] flex  items-center rounded-md '>
  <CiSearch className='text-[16px] ml-[5px]'/>
  <input type="text" className="input-field ml-[10px] outline-none w-[270px] " placeholder="Search Students List" />
 
  </div>

  
  <Link to="/create-student" className='w-[250px] bg-blue-700 text-bold text-center rounded-md text-white pt-[8px]'>
    Create Student
  </Link>

</div>
<div className='bg-[#f5f9fc] border-b-2 flex border-[#d9d6d6] h-[40px]'>
  <main className='h-[100%] w-[100px] border-b-2 border-[#0c7eff] text-[#0c7eff] '>
  <a href="" className='pl-[10px] font-semibold'>
      All Students
      </a>
  </main>
  <main className='h-[100%] w-[100px] pl-[25px] '>
  <a href="" className='pl-[10px] font-semibold'>
      JSS1
      </a>
  </main>
  <main className='h-[100%] w-[100px] '>
  <a href="" className='pl-[10px] font-semibold'>
      JSS2
      </a>
  </main>
  <main className='h-[100%] w-[100px] '>
  <a href="" className='pl-[10px] font-semibold'>
      JSS3
      </a>
  </main>
  <main className='h-[100%] w-[100px] '>
  <a href="" className='pl-[10px] font-semibold'>
      SS1
      </a>
  </main>
  <main className='h-[100%] w-[100px] '>
  <a href="" className='pl-[10px] font-semibold'>
      SS2
      </a>
  </main>
  <main className='h-[100%] w-[100px] '>
  <a href="" className='pl-[10px] font-semibold'>
      SS3
      </a>
  </main>
  <main className='h-[100%] w-[100px] '>
  <a href="" className='pl-[10px] font-semibold'>
      ALUMNI
      </a>
  </main>
  
</div>
      <nav>
      <main className='mt-[20px] flex justify-between items-center border-b-2 border-[gray] py-[20px]'>
      <div className='pr-[10px]'>
        <input type="checkbox" />
        <span className='pl-[40px]'>Name</span>
      </div>

      <div className='pl-[105px] text-center'>
       <p>ID</p>
      </div>
      {/* <div  className='pl-[10px] text-center'>
      ?
      </div> */}
      <div  className='pl-[85px] text-center'>
       <p>Parent Name</p>
      </div>
      <div  className='pl-[65px] text-center'>
       <p>Address</p>
      </div>

      <div className='pl-[120px] text-center'>
       <p>Contact</p>
      </div>

      <div className='pl-[120px] text-right'>
       <p>Class</p>
      </div>

      {/* <div  className='pl-[150px] text-center'>
       <p>More</p>
      </div> */}

      
  </main>
        {records.map((x) => (
          <Link key={x.id} to={`/student-management/${x.id}`}>
            <main className='mt-[20px] flex items-center border-b-2 border-[gray] py-[20px]'>
              <div className='flex items-center'>
                <input type="checkbox" className='mr-[4px]' />
                <div className='w-[40px] h-[40px] rounded-full'>
                  <img src={x.img_url} className='object-cover w-full h-full rounded-full' alt="" />
                </div>
                <small className='ml-[5px] font-semibold'>{x.first_name}</small>
              </div>
              <div className='w-[180px] h-[40px] mr-11'>
                <small className='font-semibold pl-[85px]'>{x.registration_id}</small>
              </div>
              {/* <div>
                <p className='font-semibold'>{x.class_assigned}</p>
              </div> */}
              <div className='w-[310px] h-[40px] ml-[19px]'>
                <p className='pl-[75px]  font-semibold'>{x.parent}</p>
              </div>
              <div className='w-[340px] h-[40px]'>
                <small className='font-semibold pl-[85px]'>{x.home_address.slice(0, 10)}</small>
              </div>
              <div className='flex items-center pl-[55px] w-[170px] h-[40px]'>
                <span className='mr-[20px] text-[#007bff] text-[10px] py-[10px] px-[25px] rounded-2xl bg-[#d6dfe8]'><FaPhone /></span>
                <span className="text-[#007bff] text-[12px] py-[10px] px-[25px] rounded-2xl bg-[#d6dfe8]"><a href=''><TiMessages /></a></span>
              </div>
              <div className='w-[240px] h-[40px] pr-[4px] text-center pl-[140px] flex  items-center'>
                <p className='font-semibold rounded-2xl bg-[#fb7d5b] py-[5px] px-[8px] text-[11px] text-white'>{x.class_assigned}</p>
              </div>
              {/* <div className='font-semibold pl-[120px]'>
                <HiDotsHorizontal />
              </div> */}
            </main>
          </Link>
        ))}
      </nav>
      <nav aria-label="Page navigation example" className="flex justify-end w-full mt-[7px]">
        <ul className="inline-flex text-sm mt-[15px]">
          <li>
            <a href="#" onClick={prePage} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">Previous</a>
          </li>
          {numbers.map((n) => (
            <li key={n} className={`page-item ${currentPage === n ? 'active' : ''}`}>
              <a href="#" aria-current={currentPage === n ? "page" : undefined} className={`flex items-center justify-center h-8 px-3 border ${currentPage === n ? 'text-blue-600 bg-blue-50' : 'text-gray-500 bg-white'} hover:bg-blue-100 hover:text-blue-700`} onClick={() => changeCPage(n)}>{n}</a>
            </li>
          ))}
          <li>
            <a href="#" onClick={nextPage} className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default StudentManagement;
