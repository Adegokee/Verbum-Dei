import React from 'react'
import {Link} from '@mui/material';

const CreateTeacher = () => {
  return (
    <div className='dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px] '>
 
     <h6 className='p-[10px]  text-[#198cff] text-[20px] font-bold' >Teacher Employment Details</h6>
    
         
<div className='flex'>
<div className=" items-center justify-center w-[250px] h-[210px] ">
<div>
<label htmlFor="dropzone-file" className="flex flex-col items-center mb-[30px] justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
    <div className="flex flex-col items-center justify-center pt-5 pb-6">
      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
      </svg>
      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
    </div>
    <input id="dropzone-file" type="file" className="hidden" />
  </label>
    






</div><form class="max-w-sm mx-auto ">
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender <span className='text-[red]'>*</span></label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
   
  </select>
</form>
<form class="max-w-sm mx-auto mt-[30px]">
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class<span className='text-[red]'>*</span></label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose Class</option>
    <option value="male">JSS1</option>
    <option value="female">JSS2</option>
    <option value="female">JSS3</option>
    <option value="female">SS1</option>
    <option value="female">SS2</option>
    <option value="female">SS3</option>

   
  </select>
</form>


</div>


<div>
<form className='pl-[40px]'>
  <div className="grid gap-6 mb-6 md:grid-cols-2 md:w-[900px] ">
    <div>
      <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name<span className='text-[red]'>*</span></label>
      <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
    </div>
    <div>
      <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name<span className='text-[red]'>*</span></label>
      <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
    </div>
    <div>
      <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of birth<span className='text-[red]'>*</span></label>
      <input type="date" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
    </div>  
    <div>
      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parent Name<span className='text-[red]'>*</span></label>
      <input type="text" id="phone"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tunde Adegoke" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
    </div>
    <div>
      <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email<span className='text-[red]'>*</span></label>
      <input type="email" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@gmail.com" required />
    </div>
    <div>
      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parent Phone number<span className='text-[red]'>*</span></label>
      <input type="number" id="phone"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="080" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
    </div>
  </div>
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address<span className='text-[red]'>*</span></label>
    <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="3, Owerri Street" required />
  </div> 
  <div>
      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Second Phone number<span className='text-[red]'>*</span></label>
      <input type="number" id="phone"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="080" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
    </div>

 

</form>

<div className='pt-[30px] '>
<h6 className='p-[10px]  text-[#198cff] text-[20px] font-bold' >Parent Details</h6>

<form >
  <div className="grid gap-6 mb-6 md:grid-cols-2 md:w-[900px] ">
    <div>
      <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name<span className='text-[red]'>*</span></label>
      <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
    </div>
    <div>
      <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name<span className='text-[red]'>*</span></label>
      <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
    </div>
   <div>
      <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email<span className='text-[red]'>*</span></label>
      <input type="email" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example@gmail.com" required />
    </div>
    <div>
      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parent Name<span className='text-[red]'>*</span></label>
      <input type="text" id="phone"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tunde Adegoke" required />
    </div>
 </div>

 <Link to="/student-finished-reg">
 <button type="" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Registration</button>
 </Link>
 
</form>
</div>
</div>
</div>



      
    </div>
  )
}

export default CreateTeacher