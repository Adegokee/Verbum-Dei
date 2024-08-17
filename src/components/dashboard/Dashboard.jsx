import React from 'react'
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

const Dashboard = () => {
  return (

    <>
     <div className="absolute bg-[#f5f9fc] top-[75px] dashboard left-[16%] p-[10px] border-2 border-gray-200">
       <div className='flex '>
      <div>
      <section class="flex">
      <div className='pt-[20px] pl-[13px]'>
            <h1 className='text-[34px] font-bold good mr-[20px]'> Good Morning, <span className="text-[#2580ff]">Favor John</span></h1>
        </div>

        <div className='w-[410px] h-[116px] mb-[14px] px-3 flex items-center bg-white border-[3px] border-gray-200 rounded-md'>
            <main className='bg-[#fcc43e] w-[40px] h-[40px] rounded-full flex justify-center items-center mr-[20px] '>
            <img src={payment} alt="" />
            </main>

            <main>
                <p className='text-[#dbd8e1]'>Total Tution for the month</p>
                <p className='flex items-center font-bold text-2xl leading-3'> <span><TbCurrencyNaira /></span>123,456</p>
                <p className='text-[#dbd8e1]'><span className='text-[#9ad9c6]'>+23% </span> than last month</p>

            </main>
            <img className='myimage' src={linegraph} alt="" />
        </div>
      </section>
      <main className=' flex px-[10px]'>
      <div className=' flex items-center pl-[20px] w-[280px]    bg-white rounded-3xl border-[3px] border-gray-200 h-[100px]'>
           <nav>
           <h1 className='text-[20px] font-medium '>STUDENTS</h1>
            <p className='text-[20px] font-medium '>308</p>
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
           <div className='w-[150px]'>
            <img src={group} alt="" className='w-[100%]'/>
           </div>
        </div>


        <div className=' top-[120px]  w-[280px] flex items-center pl-[20px] bg-white rounded-3xl border-[3px] border-gray-200 h-[100px]'>
           <nav>
           <h1 className='text-[20px] font-medium '>STUDENTS</h1>
            <p className='text-[20px] font-medium '>308</p>
            <main className='flex'>
                <div className='flex items-center mr-[9px]'>
                    <span className='text-[10px] mr-[5px] text-[#233255]'><RiCheckboxBlankFill /></span>
                    <small className="text-[10px]">MALE (61%)</small>
                </div>
                <div className='flex items-center'>
                    <span className='text-[10px] mr-[5px] text-[#007bff]'><RiCheckboxBlankFill /></span>
                    <small className="text-[10px]" >FEMALE (39%)</small>
                </div>
            </main>
           </nav>
           <div className='w-[120px]'>
            <img src={group} alt="" className='w-[100%]'/>
           </div>
        </div>

        <div className='top-[150px] w-[280px]  flex items-center pl-[20px] bg-white rounded-3xl border-[3px] border-gray-200 h-[100px]'>
           <nav>
           <h1 className='text-[20px] font-medium '>STUDENTS</h1>
            <p className='text-[20px] font-medium '>308</p>
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
           <div className='w-[150px]'>
            <img src={group} alt="" className='w-[100%]'/>
           </div>
        </div>
      </main>

      <ApexChart />


      <div className='flex w-[90%]'>
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