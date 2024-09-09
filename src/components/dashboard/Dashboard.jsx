import React, {useEffect, useState} from 'react'
import './dashboard.css'
import payment from '../../assest/Finance.png'
import linegraph from '../../assest/line.png'
import { TbCurrencyNaira } from "react-icons/tb";
import BasicDateCalendar from './BasicDateCalendar';
import group from '../../assest/Group.png'
import { RiCheckboxBlankFill } from "react-icons/ri";
import ApexChart from './ApexChart';
import PercentAreaChart from './PercentAreaChart';
import FinancialChart from './FinancialChart';
import EventUpcoming from './EventUpcoming';
import img from '../../assest/Group.png';
import img2 from '../../assest/Group7.png';
import img3 from '../../assest/Group6.png';
const mygroup = [
    {
        name: 'STUDENTS',
        number: 308,
        img: require('../../assest/Group.png')
        
    }, 
    {
        name: 'TEACHERS',
        number: 100,
        img: require('../../assest/Group7.png')
        
    }, 
    {
        name: 'SUBJECTS',
        number: 50,
        img: require('../../assest/Group6.png')
        
    }, 
]
const Dashboard = () => {
const [count, setCount] =useState([]);
const [teacherCount, setTeacherCount] =useState([]);
const [subjectCount, setSubjectCount] = useState([]);
const studentCount = async() => {
    const response = await fetch('https://verbumdei-management-system-vms.onrender.com/student/student-count/')
    const data = await response.json();
    setCount(data);
    console.log(count);
}
useEffect(() => {
    studentCount()
},[count]);

const myTeacherCount = async() => {
    const response = await fetch('https://verbumdei-management-system-vms.onrender.com/staff/staff-count/')
    const data = await response.json();
    setTeacherCount(data);
    console.log(count);
}
useEffect(() => {
    myTeacherCount()
},[teacherCount]);

const mySubjectCount = async() => {
    const response = await fetch('https://verbumdei-management-system-vms.onrender.com/class/subjects/')
    const data = await response.json();
    setSubjectCount(data);
    console.log(count);
}
useEffect(() => {
    mySubjectCount()
},[subjectCount]);

  return (

    <>
     <div className="absolute bg-[#f5f9fc] top-[75px] dashboard left-[16%] p-[10px] border-2 border-gray-200">
       <div className='flex '>
      <div>
      <section class="flex">
      <div className='pt-[20px] pl-[13px]'>
            <h1 className='text-[20px] font-bold good mr-[90px]'> Good Morning, <span className="text-[#2580ff]">Favor John</span></h1>
        </div>

        <div className='w-[390px] h-[116px] mb-[14px] px-3 flex items-center bg-white border-[3px] border-gray-200 rounded-md'>
            <main className='bg-[#fcc43e] w-[25px] h-[25px] rounded-full flex justify-center items-center mr-[20px] '>
            <img src={payment} alt="" />
            </main>

            <main>
                <small className='text-[#dbd8e1]'>Total Tution for the month</small>
                <p className='flex items-center text-[15px] font-bold leading-3'> <span className=''><TbCurrencyNaira /></span>123,456</p>
                <small className='text-[#dbd8e1]'><span className='text-[#9ad9c6]'>+23% </span> than last month</small>

            </main>
            <img className='myimage' src={linegraph} alt="" />
        </div>
      </section>
     <div className='flex'>
        <main className=' flex px-[3px]'>
            
            <div className=' flex items-center pl-[20px] w-[260px]    bg-white rounded-3xl border-[3px] border-gray-200 h-[100px]'>
            <nav>
            <h1 className='text-[20px] font-medium '>Student</h1>
                <p className='text-[20px] font-medium '>{count.count}</p>
                <main className='flex'>
                    <div className='flex items-center mr-[15px]'>
                        <span className='text-[10px] mr-[5px] text-[#233255]'><RiCheckboxBlankFill /></span>
                        <smal className="text-[10px]">MALE (61%)</smal>
                    </div>
                    <div className='flex items-center'>
                        <span className='text-[10px] mr-[5px] text-[#007bff]'><RiCheckboxBlankFill /></span>
                        <small className="text-[10px]" >FEMALE (39%)</small>
                    </div>
                </main>
            </nav>
            <div className='w-[110px]'>
                <img src={img} alt="" className='w-[100%]'/>
            </div>
            </div>
        
        
        

        

        </main>
        <main className=' flex px-[3px]'>
        
            <div className=' flex items-center pl-[20px] w-[260px]    bg-white rounded-3xl border-[3px] border-gray-200 h-[100px]'>
            <nav>
            <h1 className='text-[20px] font-medium '>Teacher</h1>
                <p className='text-[20px] font-medium '>{teacherCount.count}</p>
                <main className='flex'>
                    <div className='flex items-center mr-[15px]'>
                        <span className='text-[10px] mr-[5px] text-[#233255]'><RiCheckboxBlankFill /></span>
                        <smal className="text-[10px]">MALE (61%)</smal>
                    </div>
                    <div className='flex items-center'>
                        <span className='text-[10px] mr-[5px] text-[#007bff]'><RiCheckboxBlankFill /></span>
                        <small className="text-[10px]" >FEMALE (39%)</small>
                    </div>
                </main>
            </nav>
            <div className='w-[110px]'>
                <img src={img2} alt="" className='w-[100%]'/>
            </div>
            </div>
        
        
        

        

        </main>
        <main className=' flex px-[3px]'>
        
            <div className=' flex items-center pl-[20px] w-[200px]    bg-white rounded-3xl border-[3px] border-gray-200 h-[100px]'>
            <nav>
            <h1 className='text-[20px] font-medium '>Subject</h1>
        <p className='text-[20px] font-medium '>{subjectCount.count ? subjectCount.count: '0'}</p>
                {/* <main className='flex'>
                    <div className='flex items-center mr-[15px]'>
                        <span className='text-[10px] mr-[5px] text-[#233255]'><RiCheckboxBlankFill /></span>
                        <smal className="text-[10px]">MALE (61%)</smal>
                    </div>
                    <div className='flex items-center'>
                        <span className='text-[10px] mr-[5px] text-[#007bff]'><RiCheckboxBlankFill /></span>
                        <small className="text-[10px]" >FEMALE (39%)</small>
                    </div>
                </main> */}
            </nav>
            <div className='w-[110px]'>
                <img src={img3} alt="" className='w-[100%]'/>
            </div>
            </div>
        
        
        

        

        </main>
     </div>

      <ApexChart />


      <div className='flex w-[70%]'>
      <PercentAreaChart/>
      <FinancialChart />
      </div>

      </div >
        <div className='flex flex-col'>
        <BasicDateCalendar  />
        <EventUpcoming />
        </div>
       </div>
        

    
        </div>

       
    </>
   
  )
}

export default Dashboard