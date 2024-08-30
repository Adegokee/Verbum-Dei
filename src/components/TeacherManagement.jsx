import React, { useState, useEffect } from 'react';
import profile from '../assest/profile-avatar.png';
import { FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { HiDotsHorizontal } from "react-icons/hi";

const TeacherManagement = ({ setTeacherData, teacherData}) => {
  // const [teacherData, setTeacherData] = useState([]);
  console.log(teacherData)


  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = teacherData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(teacherData.length / recordsPerPage);
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

  const Dropdown = ({ label, children }) => (
    <div className="dropdown">
      <button className="dropdown-button">{label}</button>
      <div className="dropdown-menu">
        {children}
      </div>
    </div>
  );

  return (
    <div className="dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px]">
      <div className="dropdown-container">
        <Dropdown label="All">
          <div className="dropdown-item">Option 1</div>
          <div className="dropdown-item">Option 2</div>
        </Dropdown>
        <Dropdown label="Select Date">
          <div className="dropdown-item">Option A</div>
          <div className="dropdown-item">Option B</div>
        </Dropdown>
        <div className="bg-white w-[300px] flex items-center rounded-md">
          <CiSearch className="text-[16px] ml-[5px]" />
          <input type="text" className="input-field ml-[10px] outline-none w-[270px]" placeholder="Search Teachers List" />
        </div>
        <Link to="/create-teacher" className="w-[250px] bg-blue-700 text-bold text-center rounded-md text-white pt-[8px]">
          Add New Teacher
        </Link>
      </div>

      <div className="bg-[#f5f9fc] border-b-2 flex border-[#d9d6d6] h-[40px]">
        <main className="h-[100%] w-[100px] border-b-2 border-[#0c7eff] text-[#0c7eff]">
          <a href="" className="pl-[10px] font-semibold">
            All Teachers
          </a>
        </main>
        {/* Add other categories similarly */}
      </div>

      <nav className="flex flex-wrap ">
        {records.map((teacher) => (
         <Link to={`/teacher_profile/${teacher.id}`}>
          <main key={teacher.id} className="m-[10px] cursor-pointer  bg-white text-center rounded-lg py-[20px] w-[200px]">
            <div className="flex flex-col items-center justify-center">
              <div className="w-[40px] h-[40px] rounded-full">
                <img src={teacher.profile_img ? teacher.profile_img : profile} className="object-cover w-full h-full rounded-full cursor-pointer" alt={teacher.first_name} />
              </div>
              <span className="ml-[10px] font-semibold">{`${teacher.first_name} ${teacher.last_name}`}</span>
            </div>
            <div>
              <p className="">{teacher.staff_id}</p>
            </div>
            <div>
              <p className="">{teacher.position}</p>
            </div>
            <div className="flex items-center pl-[45px]">
            
            
              <span className="mr-[20px] text-[#007bff] py-[10px] px-[15px] rounded-2xl bg-[#d6dfe8]">
                <FaPhone />
              </span>
              
              
              <span className="text-[#007bff] text-[20px] py-[10px] px-[15px] rounded-2xl bg-[#d6dfe8]">
                <TiMessages />
              </span>
            </div>
            {/* <div className="font-semibold">
              <HiDotsHorizontal />
            </div> */}
          </main>
         
         </Link>
        ))}
      </nav>

      <nav aria-label="Page navigation example" className="flex justify-end w-full mt-[27px]">
        <ul className="inline-flex text-sm mt-[15px]">
          <li>
            <a 
              href="#" 
              onClick={prePage} 
              className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 ms-0 border-e-0 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Previous
            </a>
          </li>
          {numbers.map((n) => (
            <li key={n} className={`page-item ${currentPage === n ? 'active' : ''}`}>
              <a 
                href="#" 
                aria-current={currentPage === n ? "page" : undefined}
                className={`flex items-center justify-center h-8 px-3 border ${currentPage === n ? 'text-blue-600 bg-blue-50' : 'text-gray-500 bg-white'} border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white`}
                onClick={() => changeCPage(n)}
              >
                {n}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#" 
              onClick={nextPage} 
              className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 ms-0 border-e-0 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TeacherManagement;
