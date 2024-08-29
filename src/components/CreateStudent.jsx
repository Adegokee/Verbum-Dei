import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateStudent = ({ addStudent, errors, parentData }) => {
  console.log(parentData[0]['email']);

  const [first_name, setFirst_name] = useState('');
  const [other_name, setOther_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [date_of_birth, setDate_of_birth] = useState('');
  const [gender, setGender] = useState('');
  const [type, setType] = useState('');
  const [home_address, setHome_address] = useState('');
  const [state_of_origin, setState_of_origin] = useState('');
  const [local_government_area, setLocal_government_area] = useState('');
  const [nationality, setNationality] = useState('');
  const [parent, setParent] = useState('');
  const [religion, setReligion] = useState('');
  const [profile_image, setProfile_image] = useState(null);
  const [class_assigned, setClass_assigned] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      first_name,
      other_name,
      last_name,
      date_of_birth,
      gender,
      type,
      home_address,
      state_of_origin,
      local_government_area, 
      nationality,
      parent,
      profile_image,
      class_assigned,
 
     
     
    };

    setFirst_name('');
    setOther_name('');
    setLast_name('');
    setDate_of_birth('');
    setGender('');
    setType('');
    setHome_address('');
    setState_of_origin('');
    setLocal_government_area('');
    setNationality('');
    setParent('');
    setReligion('');
    setProfile_image();
    setClass_assigned('');
      
   
    addStudent(newReview);
  };

  return (
    <div className="dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px]">
      <h6 className="p-[10px] text-[#198cff] text-[20px] font-bold">Student Details Registration</h6>

      <form onSubmit={handleSubmit}>

        <main>
        <div className='flex justify-center'>
        <div className="items-center justify-center w-[250px] h-[210px]">
          <label htmlFor="profile_img" className="flex flex-col items-center mb-[30px] justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            {/* <input id="profile_img" type="file" className="hidden" onChange={(e) => setProfileImg(e.target.files[0])} /> */}
            <input  type="file" aria-label="upload" value={profile_image} nChange={(e) => setProfile_image(e.target.files[0])} disabled="" className="flex-grow py-2 font-medium text-gray-300 x-3 m text-ellipsis dark:bg-gray-900 dark:text-gray-300 ml-[90px]"/>
            {errors.profile_image && <p className="mt-1 text-sm text-red-500 ">{errors.profile_image}</p>}
            
          </label>
        </div>

       
        <div className="pl-[40px] w-[700px]">
        <div>
              <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900">Type<span className='text-[red]'>*</span></label>
              <select id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={type} onChange={(e) => setType(e.target.value)} required>
                <option value="" disabled>Select Type</option>
                <option value="DAY">day</option>
                <option value="BOARDER">boarder</option>
              </select> {errors.gender && <p className="mt-1 text-sm text-red-500 ">{errors.gender}</p>}
            </div>

            <div>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">First name<span className='text-[red]'>*</span></label>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={first_name} onChange={(e) => setFirst_name(e.target.value)} required />
              {errors.first_name && <p className="mt-1 text-sm text-red-500 ">{errors.first_name}</p>}
            </div>
          
            <div>
              <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Last name<span className='text-[red]'>*</span></label>
              <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={last_name} onChange={(e) => setLast_name(e.target.value)} required />
              {errors.last_name && <p className="mt-1 text-sm text-red-500 ">{errors.last_name}</p>}
            </div>

            <div>
              <label htmlFor="other_name" className="block mb-2 text-sm font-medium text-gray-900">Other Name<span className='text-[red]'>*</span></label>
              <input type="text" id="other_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={other_name} onChange={(e) => setOther_name(e.target.value)} />
              {errors.other_name && <p className="mt-1 text-sm text-red-500 ">{errors.other_name}</p>}
            </div>
           
            <div>
              <label htmlFor="other_name" className="block mb-2 text-sm font-medium text-gray-900">Nationality<span className='text-[red]'>*</span></label>
              <input type="text" id="other_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={nationality} onChange={(e) => setNationality(e.target.value)} />
              {errors.nationality && <p className="mt-1 text-sm text-red-500 ">{errors.nationality}</p>}
            </div>
            <div>
      <label htmlFor="date_of_birth" className="block mb-2 text-sm font-medium text-gray-900">
        Date of Birth<span className='text-[red]'>*</span>
      </label>
      <input
        type="date"
        id="date_of_birth"
        className="vDateField border bg-white font-medium min-w-20 rounded-md shadow-sm text-gray-500 text-sm focus:ring focus:ring-primary-300 focus:border-primary-600 focus:outline-none group-[.errors]:border-red-600 group-[.errors]:focus:ring-red-200 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 dark:focus:border-primary-600 dark:focus:ring-primary-700 dark:focus:ring-opacity-50 dark:group-[.errors]:border-red-500 dark:group-[.errors]:focus:ring-red-600/40 px-3 py-2 w-full min-w-52"
        value={date_of_birth} onChange={(e) => setDate_of_birth(e.target.value)}
        
        required
      />
      {/* Display error message if there's any */}
      {/* Example: {errors.date_of_birth && <p className="mt-1 text-sm text-red-500">{errors.date_of_birth}</p>} */}
    </div>
            <div>
              <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900">Parent<span className='text-[red]'>*</span></label>
              <select id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={parent} onChange={(e) => setParent(e.target.value)} required>
              <option value="" selected="">Select value</option>
            
                {parentData.map((x) => (
                   <option value={x.id}>{x.code} - {x.email}</option>
                ))}
                
                
              </select>
              {errors.parent && <p className="mt-1 text-sm text-red-500 ">{errors.parent}</p>}
            </div>
            <div>
              <label htmlFor="other_name" className="block mb-2 text-sm font-medium text-gray-900">Religion<span className='text-[red]'>*</span></label>
              <input type="text" id="other_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={religion} onChange={(e) => setReligion(e.target.value)} />
              {errors.religion && <p className="mt-1 text-sm text-red-500 ">{errors.religion}</p>}
            </div>
        </div>
      </div>
        </main>
     
    
     

      {/* Submit Button */}
      <button type="submit" className="w-1/4 md:ml-[69px] text-white bg-blue-700 mt-[70px] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
    </form>
    </div>
  );
};

export default CreateStudent;


