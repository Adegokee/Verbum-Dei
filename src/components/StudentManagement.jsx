import React, {useState} from 'react'
import profile from '../assest/profile-avatar.png'
import { FaCaretDown } from "react-icons/fa";
import {Link} from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import student from '../assest/high-res-student-smiling.jpg'
import { FaPhone } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { HiDotsHorizontal } from "react-icons/hi";
import { myData } from './data';

// import { FaCaretDown } from "react-icons/fa";



const StudentManagement = ({mydata, setMydata}) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = myData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(myData.length / recordsPerPage);
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

  const Dropdown = ({ label, children, label2, }) => (
    <div className="dropdown">
     
      {/* <button className="dropdown-button2">{label2}</button> */}
      <button className=" dropdown-button">{label}</button>
      <div className="dropdown-menu">
        {children}
      </div>
    </div>
  );
  
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
      <div className='pr-[150px]'>
        <input type="checkbox" />
        <span className='ml-8'>Name</span>
      </div>

      <div className='pr-[10px] text-center'>
       <p>ID</p>
      </div>
      <div  className='pl-[20px] text-center'>
       <p>Date Registered</p>
      </div>
      <div  className='pl-[20px] text-center'>
       <p>Parent Name</p>
      </div>
      <div  className='pl-[20px] text-center'>
       <p>Address</p>
      </div>

      <div className='pl-[20px] text-center'>
       <p>Contact</p>
      </div>

      <div className='pl-[20px] text-right'>
       <p>Class</p>
      </div>

      <div  className='pl-[20px] text-center'>
       <p>More</p>
      </div>

      
  </main>
  {mydata.map((x)=> (
     <main className='mt-[20px] flex justify-between items-center border-b-2 border-[gray] py-[20px]'>
     <div  className='flex items-center'>
       <input type="checkbox" className='mr-[12px]' />
       <div className='w-[40px] h-[40px] rounded-full'>
       <img src={x.img} className='object-cover w-full h-full rounded-full' alt="" />
       </div>
       <span className='ml-[10px] font-semibold'>{x.name}</span>
     </div>

     <div>
      <p className='font-semibold'>#{x.id}</p>
     </div>
     <div>
      <p className='font-semibold'>{x.data}</p>
     </div>
     <div>
      <p className='ml-[30px] font-semibold'>{x.parent_name}</p>
     </div>
     <div>
      <p className='font-semibold'>{x.address}</p>
     </div>

     <div className='flex items-center'>
       <span className='mr-[20px] text-[#007bff] py-[10px] px-[15px] rounded-2xl bg-[#d6dfe8]'><FaPhone /></span>
       <span className="text-[#007bff] text-[20px] py-[10px] px-[15px] rounded-2xl bg-[#d6dfe8]"><TiMessages /></span>
     </div>

     <div  className='pr-[40px] text-center'>
      <p className='font-semibold rounded-2xl bg-[#fb7d5b] py-[10px] px-[15px]  text-white'>{x.class}</p>
     </div>

     <div className='font-semibold'>
     <HiDotsHorizontal />
     </div>

     
 </main>
  ))}
 

 
 </nav>
 

<nav aria-label="Page navigation example" className="flex justify-end w-full mt-[7px] ">
<ul className="inline-flex  text-sm mt-[15px]">
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
          className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 ms-0 border-e-0 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </a>
      </li>
    </ul>
</nav>




</div>

  )

}


export default StudentManagement