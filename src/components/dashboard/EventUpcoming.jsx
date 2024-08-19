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


      <div className="bg-[#015486] mt-[15px] p-3 rounded-r-2xl border-l-[4px] border-[#fd9a56]">
        <p className="text-white text-[16px]">Saturday</p>
       <p className='text-[10px] text-white pl-[9px]'> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <p className='text-right text-[9px] text-white mt-[7px]'>9th August, 2024</p>
      </div>

      <div className="bg-[#00b69b] mt-[15px] p-3 rounded-r-2xl border-l-[4px] border-[#357af6]">
        <p className="text-white text-[16px]">Saturday</p>
       <p className='text-[10px] text-white pl-[9px]'> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <p className='text-right text-[9px] text-white mt-[7px]'>9th August, 2024</p>
      </div>
        
    </div>
  )
}

export default EventUpcoming