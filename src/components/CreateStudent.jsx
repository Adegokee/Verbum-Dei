import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CreateStudent = ({ addStudent, myclass, mydata, errors, myparent }) => {
  // const [errors, setErrors] = useState({});

  const [type, setType] = useState('');
  const [registration_id, setRegistration_id] = useState('');
  const [first_name, setFirst_name] = useState('');
  const [ other_name, setOther_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [date_of_birth, setDate_of_birth] = useState('');
  const [gender, setGender] = useState('');
  const [home_address, setHome_address] = useState('');
  const [state_of_origin, setState_of_origin] = useState('');
  const [local_government_area, setLocal_government_area] = useState('')
  const [nationality, setNationality] = useState('')
  const [religion, setReligion] = useState('');
  const [class_assigned, setClass_assigned] = useState('');
  const [parent, setParent] = useState('');
  const [profile_image, setProfile_image] = useState("");
  const [file, setFile] = useState(null);
 
  const imageUrl = "https://verbumdei-management-system-vms.onrender.com/media/Student_profile/Annotation_2022-03-08_120639.jpg";

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setProfile_image(URL.createObjectURL(selectedFile)); // For previewing the selected file
    }
  };


  
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Check if a new file is uploaded
    if (file) {
      formData.append("profile_image", file); // append the file
    } else {
      // If no file, append the URL as is or fetch and convert it into a file
      formData.append("profile_image", imageUrl); 
    }

    const newReview = {
      type,
      registration_id,
      first_name,
      last_name,
      other_name,
      date_of_birth,
      gender,
      home_address,
      state_of_origin,
      religion,
      class_assigned,
      parent,
      local_government_area,
      profile_image,
      nationality,
    };
    console.log(newReview);

    addStudent(newReview);

    console.log(newReview)
    setType('');
    setRegistration_id('');
    setFirst_name('');
    setOther_name('');
    setLast_name('');
    setDate_of_birth('');
    setGender('');
    setHome_address('');
    setState_of_origin('');
    setLocal_government_area('');
    setNationality('');
    setReligion('');
    setClass_assigned({});
    setParent({});
    setProfile_image(null);
  };
  

  return (

    <div className="dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px]">
      <h6 className="p-[10px] text-[#198cff] text-[20px] font-bold">Student Details Registration</h6>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
      {errors.global && <p className="error">{errors.global}</p>}
   

        <div className="flex  ">
        <div className="items-center justify-center w-[350px] h-[210px] mr-[40px]">
          <label htmlFor="profile_img" className="flex flex-col items-center mb-[30px] justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            {/* <input id="profile_img" type="file" className="hidden" onChange={(e) => setProfileImg(e.target.files[0])} /> */}
            {/* <input type="file" aria-label="Choose file to upload"  id="profile_img" value={setProfile_image} disabled="" nChange={(e) => setProfile_image(e.target.files[0])} className="w-[107px] flex-grow font-medium px-3 py-2 text-ellipsis dark:bg-gray-900 text-gray-300 dark:text-gray-300"/> */}
            {/* <input type="file" name="profile_image" value={setProfile_image} onChange={(e) => setProfile_image(e.target.files[0])} accept="image/*" required="" id="profile_image"/> */}
            <input type="file" class="form-control" id="upload" accept="image/*" required=""></input>
            {/* <label for="profile_image">Profile Image:</label> */}
            {/* <input type="file" id="profile_image" name="profile_image"  onChange={handleFileChange}  accept="image/*" className='ml-[100px]' required/> */}
            
            {errors.profile_image && <p className="mt-1 text-sm text-red-500 ">{errors.profile_image}</p>}
            
          </label>
          {errors.profile_image && <p className="mt-1 text-sm text-red-500 ">{errors.profile_image}</p>}
        </div>

        <div className='w-[350px] mr-[25px]'>
                {/* Type */}
        <div className=' '>
          <label className="block mb-2 text-sm font-medium text-gray-900">Type<span className='text-[red]'>*</span></label>
          <select name="type" value={type} onChange={(e) =>   setType(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
            <option value="" disabled>Select Type</option>
            <option value="DAY">Day</option>
            <option value="BOARDER">Boarder</option>
          </select>
          {errors.type && <p className="mt-1 text-sm text-red-500 ">{errors.type}</p>}
        </div>

        {/* First Name */}
        <div>
          <label  className="block mb-2 text-sm font-medium text-gray-900">First Name<span className='text-[red]'>*</span></label>
          <input
            type="text"
            name="first_name"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
            required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.first_name && <p className="mt-1 text-sm text-red-500 ">{errors.first_name}</p>}
        </div>

        {/* Other Name */}
        <div>
          <label  className="block mb-2 text-sm font-medium text-gray-900">Other Name<span className='text-[red]'>*</span></label>
          <input
            type="text"
            name="other_name"
            value={other_name}
            onChange={(e) => setOther_name(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.other_name && <p className="mt-1 text-sm text-red-500 ">{errors.other_name}</p>}
        </div>

        {/* Last Name */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">Last Name<span className='text-[red]'>*</span></label>
          <input
            type="text"
            name="last_name"
            value={last_name}
            onChange={(e) =>  setLast_name(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
          {errors.last_name && <p className="mt-1 text-sm text-red-500 ">{errors.last_name}</p>}
        </div>

        {/* Date of Birth */}
        <div>
          <label  className="block mb-2 text-sm font-medium text-gray-900">Date of Birth<span className='text-[red]'>*</span></label>
          <input
            type="date"
            name="date_of_birth"
            value={date_of_birth}
            onChange={(e) => setDate_of_birth(e.target.value)}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.last_name && <p className="mt-1 text-sm text-red-500 ">{errors.last_name}</p>}
        </div>

        {/* Gender */}
        <div>
          <label  className="block mb-2 text-sm font-medium text-gray-900">Gender<span className='text-[red]'>*</span></label>
          <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option value="" disabled>Select Gender</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
          {errors.gender && <p className="mt-1 text-sm text-red-500 ">{errors.gender}</p>}
        </div>


        {/* Home Address */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900" >Home Address<span className='text-[red]'>*</span></label>
          <input
            type="text"
            name="home_address"
            value={home_address}
            onChange={(e) => setHome_address(e.target.value)}
            required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.gender && <p className="mt-1 text-sm text-red-500 ">{errors.gender}</p>}
        </div>
        </div>

        <div className='w-[350px] mr-[25px]'>
              {/* State of Origin */}
        <div className=''>
          <label className="block mb-2 text-sm font-medium text-gray-900">State of Origin<span className='text-[red]'>*</span></label>
          <input
            type="text"
            name="state_of_origin"
            value={state_of_origin}
            onChange={(e) => setState_of_origin(e.target.value)}
            required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.state_of_origin && <p className="mt-1 text-sm text-red-500 ">{errors.state_of_origin}</p>}
        </div>

        {/* Local Government Area */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">Local Government Area<span className='text-[red]'>*</span></label>
          <input
            type="text"
            name="local_government_area"
            value={local_government_area}
            onChange={(e) => setLocal_government_area(e.target.value)}
            required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.local_government_area && <p className="mt-1 text-sm text-red-500 ">{errors.local_government_area}</p>}
        </div>

        {/* Nationality */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">Nationality<span className='text-[red]'>*</span></label>
          <input
            type="text"
            name="nationality"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.nationality && <p className="mt-1 text-sm text-red-500 ">{errors.nationality}</p>}
        </div>

        {/* Parent */}
        <div className="mr-[]">
          <label className="block mb-2 text-sm font-medium text-gray-900">Parent<span className='text-[red]'>*</span></label>
          <select name="parent" value={parent} onChange={(e) => setParent(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
            <option value="" disabled>Select Parent</option>
            {myparent.map((x) => {
            
                return (
                  <option key={x.id} value={x.id}>{x.parent_name}</option>
                );
           
            })}
          </select>
          {errors.parent && <p className="mt-1 text-sm text-red-500 ">{errors.parent}</p>}
        </div>

        {/* Class Assign */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">Class Assign<span className='text-[red]'>*</span></label>
          <select name="class_assigned" value={class_assigned} onChange={(e) => setClass_assigned(e.target.value)} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" data-context="available-source" id="id_class_assigned">
          <option value="" selected="">Select Class</option>
          {myclass.map((x)=> (
             <option key={x.id} value={x.name} className='text-white bg-black'>{x.name}</option>
           
          ))}
         

        </select>
        {errors.class_assigned && <p className="mt-1 text-sm text-red-500 ">{errors.class_assigned}</p>}
   
        </div>

       
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">Religion<span className='text-[red]'>*</span></label>
          <input
            type="text"
            name="religion"
            value={religion}
            onChange={(e) => setReligion(e.target.value)}
            required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.religion && <p className="mt-1 text-sm text-red-500 ">{errors.religion}</p>}
        </div>
        <button className="w-[100%]  text-white bg-blue-700 mt-[34px] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Submit</button>
        {errors.global && <p className="error">{errors.global}</p>}
        </div>
        
              
        </div>
    

  
        

       
        {/* console.log(errors) */}
      </form>

    </div>
  );
};

export default CreateStudent;


