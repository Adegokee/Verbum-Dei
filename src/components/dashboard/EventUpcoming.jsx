import React from 'react'

const EventUpcoming = () => {
  return (
    <div className='border-2 p-[20px] mt-[20px] border-gray-200 ml-[20px] h-[310px] rounded-md bg-white'>
        <h3 className='font-bold mb-[10px]'>UpComing Event</h3>
        <div className=''>
            <span className='text-[17px] mr-[10px] bg-[#cce5ff] text-[#80beff] px-[12px] py-[4px] rounded-2xl'>All</span>
            <span className='text-[17px] text-center mr-[10px] bg-[white] border-[2px] border-[#80beff] text-[#80beff] px-[12px] py-[4px] rounded-2xl'>Today</span>
            <span className='text-[17px] text-center mr-[10px] bg-[white] border-[2px] border-[#80beff] text-[#80beff] px-[12px] py-[4px] rounded-2xl'>Weekly</span>
            <span className='text-[17px] text-center mr-[10px] bg-[white] border-[2px] border-[#80beff] text-[#80beff] px-[12px] py-[4px] rounded-2xl'>Montly</span>
        </div>
        
    </div>
  )
}

export default EventUpcoming