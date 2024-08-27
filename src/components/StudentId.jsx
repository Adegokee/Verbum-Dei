import React from 'react';
import {Link} from 'react-router-dom';
import student from '../assest/high-res-student-smiling.jpg'
import { BsThreeDots } from "react-icons/bs";
import { FaRegCopy } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { IoLanguageOutline } from "react-icons/io5";
import { FaTransgender } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

import { CgProfile } from "react-icons/cg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

const StudentId = () => {
  return (
    <div className="dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px]">
         <Link to='/'>
            <p className='ml-[10px] md:p-[5px] bg-white text-center md:w-[100px] rounded-lg font-semibold text-[#007bff] text-[20px] border-2 border-[#007bff]'>Back</p>
       </Link>
       
     
       <div className='bg-white md:px-auto h-[90vh] md:relative md:top-[40px] rounded-lg flex justify-between  mb-[50px] '>
            <div className='w-[70px] h-[70px] mt-9 absolute top-[-60px] left-[20px] border-[4px] rounded-full border-white '>
                <img className='object-cover w-full h-full rounded-full' src={student} alt="" />
            </div>
            <div className='absolute right-[150px] top-[10px]'>
            <BsThreeDots/>
            </div>

            <div className='absolute top-[70px]'>
               <div className='px-[30px]' >
                 <div className='flex'>
                    <p>VD123456789</p> <span className='ml-[20px]'><FaRegCopy /></span>
                </div>
                <div className='flex justify-between items-center md:w-[1100px] p-[10px]'>
                <div className='flex'>
                    <h1 className='text-[20px] font-semibold pt-[4px]'>Nmesoma Okoye</h1>

                    <p className='ml-[30px] bg-[#00b69b] md:p-[5px] rounded-[10px] text-center text-white'>JSS3</p>
                </div>
                    
                    <Link to=''>
                    <div className='flex justify-center text-white bg-blue-500 p-[10px] rounded-md'>
                    <LuExternalLink /> Edit Data
                    </div>
                    </Link>
                </div>
             
               </div>
            </div>
    <main className=' absolute top-[200px] pl-[10px]'>
      <div className='flex justify-between w-[1100px]'>
      <div>
            <p className='pl-[10px] mb-[10px]'>Age</p>
            
            <div className='flex items-center'>
                <div className='bg-[#007bff] p-[5px] rounded-full'>
                <IoLanguageOutline className='text-white'  />
                </div>
                <main className='ml-[10px]'>17</main>
            </div>
        </div>
        <div>
            <p className='pl-[10px] mb-[10px]'>Gender</p>
            
            <div className='flex items-center'>
                <div className='bg-[#007bff] p-[5px] rounded-full'>
                <FaTransgender className='text-white'  />
                </div>
                <main className='ml-[10px]'>Male</main>
            </div>
        </div>
        <div>
            <p className='pl-[10px] mb-[10px]'>Date of Registration</p>
            
            <div className='flex items-center'>
                <div className='bg-[#007bff] p-[5px] rounded-full'>
                <MdDateRange className='text-white'  />
                </div>
                <main className='ml-[10px]'>12-7-2020</main>
            </div>
        </div>
        <div>
            <p className='pl-[10px] mb-[10px]'>Year of Graduation</p>
            
            <div className='flex items-center'>
                <div className='bg-[#007bff] p-[5px] rounded-full'>
                <FaGraduationCap  className='text-white' />
                </div>
                <main className='ml-[10px]'>2020</main>
            </div>
        </div>
      </div>

      <div className='flex justify-between w-[1100px] md:mt-[70px]'>
      <div>
            <p className='pl-[10px] mb-[10px]'>Parent</p>
            
            <div className='flex items-center'>
                <div className='bg-[#007bff] p-[5px] rounded-full'>
                <CgProfile className='text-white' />
                </div>
                <main className='ml-[10px]'>Amaka Williams</main>
            </div>
        </div>
        <div>
            <p className='pl-[10px] mb-[10px]'>Address</p>
            
            <div className='flex items-center'>
                <div className='bg-[#007bff] p-[5px] rounded-full'>
                <FaMapMarkerAlt className='text-white' />
                </div>
                <main className='ml-[10px]'>10, Owerri Road</main>
            </div>
        </div>
        <div>
            <p className='pl-[10px] mb-[10px]'>Phone</p>
            
            <div className='flex items-center'>
                <div className='bg-[#007bff] p-[5px] rounded-full'>
                <FaPhoneAlt className='text-white' />
                </div>
                <main className='ml-[10px]'>+234567890123</main>
            </div>
        </div>
        <div>
            <p className='pl-[10px] mb-[10px]'>Email</p>
            
            <div className='flex items-center'>
                <div className='bg-[#007bff] p-[5px] rounded-full'>
                <IoMdMail className='text-white'/>
                </div>
                <main className='ml-[10px]'>amaka@yahoo.com</main>
            </div>
        </div>
      </div>
    </main>
            
        </div>

        
        <div className='bg-white h-[200px] p-[15px] rounded-lg' >
            <h1 className='mb-[20px] font-bold text-[20px]'>Payment History</h1>
            
            <main className='flex justify-between px-[70px]'>
                
                <div className='flex'>
                <div className='bg-[#007bff] p-[5px] mr-[13px] rounded-full'>
                <FaArrowTrendUp className='text-white' />
                </div>
                     <p> #12345678</p>
                </div>
                <div>
                    <p> 2nd, March 2024</p>
                </div>
                <div>
                    <p> &#x20A6; 300000</p>
                </div>
                <div>
                    <p> Pending</p>
                </div>

                <div>
                    <p>Fees</p>
                </div>
            </main>
            <main className='flex justify-between px-[70px] mt-[20px]'>
                
                <div className='flex'>
                <div className='bg-[#007bff] p-[5px] mr-[13px] rounded-full'>
                <FaArrowTrendUp className='text-white' />
                </div>
                     <p> #12345678</p>
                </div>
                <div>
                    <p> 2nd, March 2024</p>
                </div>
                <div>
                    <p> &#x20A6; 300000</p>
                </div>
                <div>
                    <p> Pending</p>
                </div>

                <div>
                    <p>Fees</p>
                </div>
            </main>
            <main className='flex justify-between px-[70px] mt-[20px]'>
                
                <div className='flex'>
                <div className='bg-[#007bff] p-[5px] mr-[13px] rounded-full'>
                <FaArrowTrendUp className='text-white' />
                </div>
                     <p> #12345678</p>
                </div>
                <div>
                    <p> 2nd, March 2024</p>
                </div>
                <div>
                    <p> &#x20A6; 300000</p>
                </div>
                <div>
                    <p> Pending</p>
                </div>

                <div>
                    <p>Fees</p>
                </div>
            </main>
            
        </div>
   
        
    </div>
  )
}

export default StudentId