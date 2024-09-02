import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateTeacher = ({addTeacher, errors}) => {


  const [bvn, setBvn] = useState('');
  const [created_at, setCreatedAt] = useState('');
  const [email, setEmail] = useState('');
  const [employment_type, setEmploymentType] = useState('');
  const [first_name, setFirstName] = useState('');
  const [gender, setGender] = useState('');
  const [home_address, setHomeAddress] = useState('');
  const [id, setId] = useState('');
  const [last_name, setLastName] = useState('');
  const [local_government_area, setLocalGovernmentArea] = useState('');
  const [nin, setNin] = useState('');
  const [other_name, setOtherName] = useState('');
  const [phone_number_1, setPhoneNumber1] = useState('');
  const [phone_number_2, setPhoneNumber2] = useState('');
  const [position, setPosition] = useState('');
  const [profile_img, setProfileImg] = useState(null);
  const [staff_id, setStaffId] = useState('');
  const [staff_type, setStaffType] = useState('');
  const [state_of_origin, setStateOfOrigin] = useState('');
  const [status, setStatus] = useState('');
  const handleSubmit= async (e) => {
    e.preventDefault()


    const formData = {
      bvn,
      created_at,
      email,
      employment_type,
      first_name,
      gender,
      home_address,
      id,
      last_name,
      local_government_area,
      nin,
      other_name,
      phone_number_1,
      phone_number_2,
      position,
      profile_img,
      staff_id,
      staff_type,
      state_of_origin,
      status,
    };
    console.log(formData)

    addTeacher(formData)

    
    setBvn('');
    setCreatedAt('');
    setEmail('');
    setEmploymentType('');
    setFirstName('');
    setGender('');
    setHomeAddress('');
    setId('');
    setLastName('');
    setLocalGovernmentArea('');
    setNin('');
    setOtherName('');
    setPhoneNumber1('');
    setPhoneNumber2('');
    setPosition('');
    setProfileImg('');
    setStaffId('');
    setStaffType('');
    setStateOfOrigin('');
    setStatus('');
    setProfileImg();


  }


  return (
    <div className='dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px]'>
      <h6 className='p-[10px] text-[#198cff] text-[20px] font-bold'>Teacher Employment Details</h6>
      
      <form onSubmit={handleSubmit}>
      {/* Profile Image Upload */}
      <div className='flex'>
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
            <input type="file" aria-label="Choose file to upload"  id="profile_img" value={profile_img} disabled="" nChange={(e) => setProfileImg(e.target.files[0])} className="w-[107px] flex-grow font-medium px-3 py-2 text-ellipsis dark:bg-gray-900 text-gray-300 dark:text-gray-300"/>
            {errors.profile_img && <p className="text-red-500 text-sm mt-1 ">{errors.profile_img}</p>}
            
          </label>
          {errors.profile_img && <p className="text-red-500 text-sm mt-1 ">{errors.profile_img}</p>}
        </div>

        {/* Form Fields */}
        <div className="pl-[40px]">
          <div className="grid gap-6 mb-6 md:grid-cols-2 md:w-[900px]">
            {/* Individual Fields */}
            <div>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">First name<span className='text-[red]'>*</span></label>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={first_name} onChange={(e) => setFirstName(e.target.value)} required />
            </div>
            {/* Add other fields in a similar fashion */}
            <div>
              <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Last name<span className='text-[red]'>*</span></label>
              <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={last_name} onChange={(e) => setLastName(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="other_name" className="block mb-2 text-sm font-medium text-gray-900">Other Name</label>
              <input type="text" id="other_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={other_name} onChange={(e) => setOtherName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email<span className='text-[red]'>*</span></label>
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={email} onChange={(e) => setEmail(e.target.value)} required />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="home_address" className="block mb-2 text-sm font-medium text-gray-900">Home Address<span className='text-[red]'>*</span></label>
              <input type="text" id="home_address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={home_address} onChange={(e) => setHomeAddress(e.target.value)} required />
              {errors.home_address && <p className="text-red-500 text-sm mt-1">{errors.home_address}</p>}
            </div>
            <div>
              <label htmlFor="state_of_origin" className="block mb-2 text-sm font-medium text-gray-900">State of Origin<span className='text-[red]'>*</span></label>
              <input type="text" id="state_of_origin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={state_of_origin} onChange={(e) => setStateOfOrigin(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="local_government_area" className="block mb-2 text-sm font-medium text-gray-900">Local Government Area<span className='text-[red]'>*</span></label>
              <input type="text" id="local_government_area" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={local_government_area} onChange={(e) => setLocalGovernmentArea(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="nin" className="block mb-2 text-sm font-medium text-gray-900">NIN<span className='text-[red]'>*</span></label>
              <input type="text" id="nin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={nin} onChange={(e) => setNin(e.target.value)} required />
              {errors.nin && <p className="text-red-500 text-sm mt-1">{errors.nin}</p>}
            </div>
            <div>
              <label htmlFor="bvn" className="block mb-2 text-sm font-medium text-gray-900">BVN<span className='text-[red]'>*</span></label>
              <input type="text" id="bvn" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={bvn} onChange={(e) => setBvn(e.target.value)} required />
              {errors.bvn && <p className="text-red-500 text-sm mt-1">{errors.bvn}</p>}
            </div>
            <div>
              <label htmlFor="phone_number_1" className="block mb-2 text-sm font-medium text-gray-900">Phone Number 1<span className='text-[red]'>*</span></label>
              <input type="text" id="phone_number_1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={phone_number_1} onChange={(e) => setPhoneNumber1(e.target.value)} required />
              {errors.phone_number_1 && <p className="text-red-500 text-sm mt-1">{errors.phone_number_1}</p>}
            </div>
            <div>
              <label htmlFor="phone_number_2" className="block mb-2 text-sm font-medium text-gray-900">Phone Number 2</label>
              <input type="text" id="phone_number_2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={phone_number_2} onChange={(e) => setPhoneNumber2(e.target.value)} />
              {errors.phone_number_2 && <p className="text-red-500 text-sm mt-1">{errors.phone_number_2}</p>}
            </div>
            <div>
              <label htmlFor="position" className="block mb-2 text-sm font-medium text-gray-900">Position<span className='text-[red]'>*</span></label>
              <input type="text" id="position" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={position} onChange={(e) => setPosition(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900">Gender<span className='text-[red]'>*</span></label>
              <select id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="" disabled>Select gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
              </select>
            </div>
            <div>
              <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status<span className='text-[red]'>*</span></label>
              <select id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={status} onChange={(e) => setStatus(e.target.value)} required>
                <option value="" disabled>Select status</option>
                <option value="ACTIVE">Active</option>
                <option value="INACTIVATE">Inactive</option>
              </select>
            </div>
            <div>
              <label htmlFor="staff_type" className="block mb-2 text-sm font-medium text-gray-900">Staff Type<span className='text-[red]'>*</span></label>
              <select id="staff_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={staff_type} onChange={(e) => setStaffType(e.target.value)} required>
                <option value="" disabled>Select staff type</option>
                <option value="TEACHING">Teaching</option>
                <option value="NON_TEACHING">Non-Teaching</option>
              </select>
            </div>
            <div>
              <label htmlFor="employment_type" className="block mb-2 text-sm font-medium text-gray-900">Employment Type<span className='text-[red]'>*</span></label>
              <select id="employment_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={employment_type} onChange={(e) => setEmploymentType(e.target.value)} required>
                <option value="" disabled>Select employment type</option>
                <option value="">Select Employment Type</option>
                  <option value="GRADUATE_ASSISTANCE">Graduate Assistance</option>
                  <option value="FULLTIME">Full Time</option>
                  <option value="CORPER">Corper</option>
                  <option value="PART_TIME">Part Time</option>
                  <option value="INTERN">Intern</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="w-1/4 md:ml-[199px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
    </form>
    </div>
  );
};

export default CreateTeacher;
