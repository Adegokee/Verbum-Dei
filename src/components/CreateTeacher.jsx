// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const CreateTeacher = ({addTeacher, editTeacher, teacherData, errors}) => {


//   const [bvn, setBvn] = useState(teacherData?.bvn || '');
//   const [created_at, setCreatedAt] = useState(teacherData?.created_at || '');
//   const [email, setEmail] = useState(teacherData?.email || '');
//   const [employment_type, setEmploymentType] = useState(teacherData?.employment_type || '');
//   const [first_name, setFirstName] = useState(teacherData?.first_name || '');
//   const [gender, setGender] = useState(teacherData?.gender || '');
//   const [home_address, setHomeAddress] = useState(teacherData?.home_address || '');
//   const [id, setId] = useState(teacherData?.id || '');
//   const [last_name, setLastName] = useState(teacherData?.last_name || '');
//   const [local_government_area, setLocalGovernmentArea] = useState(teacherData?.local_government_area || '');
//   const [nin, setNin] = useState(teacherData?.nin || '');
//   const [other_name, setOtherName] = useState(teacherData?.other_name || '');
//   const [phone_number_1, setPhoneNumber1] = useState(teacherData?.phone_number_1 || '');
//   const [phone_number_2, setPhoneNumber2] = useState(teacherData?.phone_number_2 || '');
//   const [position, setPosition] = useState(teacherData?.position || '');
//   const [profile_img, setProfileImg] = useState(teacherData?.profile_img || null);
//   const [staff_id, setStaffId] = useState(teacherData?.staff_id || '');
//   const [staff_type, setStaffType] = useState(teacherData?.staff_type || '');
//   const [state_of_origin, setStateOfOrigin] = useState(teacherData?.state_of_origin || '');
//   const [status, setStatus] = useState(teacherData?.status || '');

  
 
//   const handleSubmit= async (e) => {
//     e.preventDefault()


//     const formData = {
//       bvn,
//       created_at,
//       email,
//       employment_type,
//       first_name,
//       gender,
//       home_address,
//       id,
//       last_name,
//       local_government_area,
//       nin,
//       other_name,
//       phone_number_1,
//       phone_number_2,
//       position,
//       profile_img,
//       staff_id,
//       staff_type,
//       state_of_origin,
//       status,
//     };
//     if (id) {
//       await editTeacher(formData); // Update existing teacher
//     } else {
//       await addTeacher(formData); // Create new teacher
//     }
    
//     console.log(formData)

//     addTeacher(formData)

    
//     setBvn('');
//     setCreatedAt('');
//     setEmail('');
//     setEmploymentType('');
//     setFirstName('');
//     setGender('');
//     setHomeAddress('');
//     setId('');
//     setLastName('');
//     setLocalGovernmentArea('');
//     setNin('');
//     setOtherName('');
//     setPhoneNumber1('');
//     setPhoneNumber2('');
//     setPosition('');
//     setProfileImg('');
//     setStaffId('');
//     setStaffType('');
//     setStateOfOrigin('');
//     setStatus('');
//     setProfileImg();
   
//     //   const file = e.target.files[0];
//     //   setProfileImg(file);
//   };





//   return (
//     <div className='dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px]'>
//       <h6 className='p-[10px] text-[#198cff] text-[20px] font-bold'>Teacher Employment Details</h6>
      
//       <form onSubmit={handleSubmit}>
//       {/* Profile Image Upload */}
//       <div className='flex'>
//         <div className="items-center justify-center w-[300px] h-[210px]">
//           <label htmlFor="profile_img" className="flex flex-col items-center mb-[30px] justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
//             <div className="flex flex-col items-center justify-center pt-5 pb-6">
//               <svg className="w-8 h-8 mb-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
//               </svg>
//               <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
//               <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
//             </div>
//             {/* <input id="profile_img" type="file" className="hidden" onChange={(e) => setProfileImg(e.target.files[0])} /> */}
//             {/* <input type="file" aria-label="Choose file to upload"  id="profile_img" value={profile_img} disabled="" onChange={(e) => setProfileImg(e.target.files[0])} className="w-[167px] flex-grow font-medium px-3 py-2 text-ellipsis dark:bg-gray-900 text-gray-300 dark:text-gray-300"/>
//             {errors.profile_img && <p className="mt-1 text-sm text-red-500 ">{errors.profile_img}</p>} */}
//                <input
//               type="file"
//               id="upload"
//               name="upload"
//               accept="image/*"
//             className="w-[167px] flex-grow font-medium px-3 py-2 text-ellipsis dark:bg-gray-900 text-gray-300 dark:text-gray-300"
//               required
//             />
             
            
            
//           </label>
//           {errors.profile_img && <p className="mt-1 text-sm text-red-500 ">{errors.profile_img}</p>}
//         </div>

//         {/* Form Fields */}
//         <div className="pl-[40px]">
//           <div className="grid gap-6 mb-6 md:grid-cols-2 md:w-[700px]">
//             {/* Individual Fields */}
//             <div>
//               <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">First name<span className='text-[red]'>*</span></label>
//               <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={first_name} onChange={(e) => setFirstName(e.target.value)} required />
//             </div>
//             {/* Add other fields in a similar fashion */}
//             <div>
//               <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Last name<span className='text-[red]'>*</span></label>
//               <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={last_name} onChange={(e) => setLastName(e.target.value)} required />
//             </div>
//             <div>
//               <label htmlFor="other_name" className="block mb-2 text-sm font-medium text-gray-900">Other Name</label>
//               <input type="text" id="other_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={other_name} onChange={(e) => setOtherName(e.target.value)} />
//             </div>
//             <div>
//               <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email<span className='text-[red]'>*</span></label>
//               <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={email} onChange={(e) => setEmail(e.target.value)} required />
//               {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
//             </div>
//             <div>
//               <label htmlFor="home_address" className="block mb-2 text-sm font-medium text-gray-900">Home Address<span className='text-[red]'>*</span></label>
//               <input type="text" id="home_address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={home_address} onChange={(e) => setHomeAddress(e.target.value)} required />
//               {errors.home_address && <p className="mt-1 text-sm text-red-500">{errors.home_address}</p>}
//             </div>
//             <div>
//               <label htmlFor="state_of_origin" className="block mb-2 text-sm font-medium text-gray-900">State of Origin<span className='text-[red]'>*</span></label>
//               <input type="text" id="state_of_origin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={state_of_origin} onChange={(e) => setStateOfOrigin(e.target.value)} required />
//             </div>
//             <div>
//               <label htmlFor="local_government_area" className="block mb-2 text-sm font-medium text-gray-900">Local Government Area<span className='text-[red]'>*</span></label>
//               <input type="text" id="local_government_area" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={local_government_area} onChange={(e) => setLocalGovernmentArea(e.target.value)} required />
//             </div>
//             <div>
//               <label htmlFor="nin" className="block mb-2 text-sm font-medium text-gray-900">NIN<span className='text-[red]'>*</span></label>
//               <input type="text" id="nin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={nin} onChange={(e) => setNin(e.target.value)} required />
//               {errors.nin && <p className="mt-1 text-sm text-red-500">{errors.nin}</p>}
//             </div>
//             <div>
//               <label htmlFor="bvn" className="block mb-2 text-sm font-medium text-gray-900">BVN<span className='text-[red]'>*</span></label>
//               <input type="text" id="bvn" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={bvn} onChange={(e) => setBvn(e.target.value)} required />
//               {errors.bvn && <p className="mt-1 text-sm text-red-500">{errors.bvn}</p>}
//             </div>
//             <div>
//               <label htmlFor="phone_number_1" className="block mb-2 text-sm font-medium text-gray-900">Phone Number 1<span className='text-[red]'>*</span></label>
//               <input type="text" id="phone_number_1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={phone_number_1} onChange={(e) => setPhoneNumber1(e.target.value)} required />
//               {errors.phone_number_1 && <p className="mt-1 text-sm text-red-500">{errors.phone_number_1}</p>}
//             </div>
//             <div>
//               <label htmlFor="phone_number_2" className="block mb-2 text-sm font-medium text-gray-900">Phone Number 2</label>
//               <input type="text" id="phone_number_2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={phone_number_2} onChange={(e) => setPhoneNumber2(e.target.value)} />
//               {errors.phone_number_2 && <p className="mt-1 text-sm text-red-500">{errors.phone_number_2}</p>}
//             </div>
//             <div>
//               <label htmlFor="position" className="block mb-2 text-sm font-medium text-gray-900">Position<span className='text-[red]'>*</span></label>
//               <input type="text" id="position" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={position} onChange={(e) => setPosition(e.target.value)} required />
//             </div>
//             <div>
//               <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900">Gender<span className='text-[red]'>*</span></label>
//               <select id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={gender} onChange={(e) => setGender(e.target.value)} required>
//                 <option value="" disabled>Select gender</option>
//                 <option value="MALE">Male</option>
//                 <option value="FEMALE">Female</option>
//               </select>
//             </div>
//             <div>
//               <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status<span className='text-[red]'>*</span></label>
//               <select id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={status} onChange={(e) => setStatus(e.target.value)} required>
//                 <option value="" disabled>Select status</option>
//                 <option value="ACTIVE">Active</option>
//                 <option value="INACTIVATE">Inactive</option>
//               </select>
//             </div>
//             <div>
//               <label htmlFor="staff_type" className="block mb-2 text-sm font-medium text-gray-900">Staff Type<span className='text-[red]'>*</span></label>
//               <select id="staff_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={staff_type} onChange={(e) => setStaffType(e.target.value)} required>
//                 <option value="" disabled>Select staff type</option>
//                 <option value="TEACHING">Teaching</option>
//                 <option value="NON_TEACHING">Non-Teaching</option>
//               </select>
//             </div>
//             <div>
//               <label htmlFor="employment_type" className="block mb-2 text-sm font-medium text-gray-900">Employment Type<span className='text-[red]'>*</span></label>
//               <select id="employment_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={employment_type} onChange={(e) => setEmploymentType(e.target.value)} required>
//                 <option value="" disabled>Select employment type</option>
//                 <option value="">Select Employment Type</option>
//                   <option value="GRADUATE_ASSISTANCE">Graduate Assistance</option>
//                   <option value="FULLTIME">Full Time</option>
//                   <option value="CORPER">Corper</option>
//                   <option value="PART_TIME">Part Time</option>
//                   <option value="INTERN">Intern</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Submit Button */}
//       <button type="submit" className="w-1/4 md:ml-[599px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
//     </form>
//     </div>
//   );
// };

// export default CreateTeacher;

import React, { useState } from 'react';

const CreateTeacher = ({ teacherData,  setTeacherData }) => {
  const [formData, setFormData] = useState({
    id: '',
    first_name: '',
    last_name: '',
    other_name: '',
    phone_number_1: '',
    phone_number_2: '',
    email: '',
    gender: 'MALE',
    employment_type: 'FULLTIME',
    position: '',
    status: '',
    home_address: '',
    state_of_origin: '',
    local_government_area: '',
    nin: '',
    bvn: '',
    staff_id: '',
    upload: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      upload: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await fetch('https://verbumdei-management-system-vms.onrender.com/staff/staff/', {
        method: 'POST',
        body: data,
      });
      const result = await response.json();
      console.log('Success:', result);
      setTeacherData(); // Refresh the staff list
      setFormData({
        id: '',
        first_name: '',
        last_name: '',
        other_name: '',
        phone_number_1: '',
        phone_number_2: '',
        email: '',
        gender: 'MALE',
        employment_type: 'FULL_TIME',
        position: '',
        status: '',
        home_address: '',
        state_of_origin: '',
        local_government_area: '',
        nin: '',
        bvn: '',
        staff_id: '',
        upload: null,
      }); // Reset the form
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
   <div className='dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px]'>
     <form onSubmit={handleSubmit} encType="multipart/form-data">
    <div className="flex flex-wrap justify-center">
     <div className="w-[270px] p-2">
        <label htmlFor="upload" className="block mb-2 text-sm font-medium text-gray-900">Upload Image<span className='text-[red]'>*</span></label>
        <input
          type="file"
          name="upload"
          id="upload"
          onChange={handleFileChange}
          accept="image/*"
          required
          className=" form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      {/* Form fields */}
     
  
      <div className="w-[270px] p-2">
        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">First name<span className='text-[red]'>*</span></label>
        <input
          type="text"
          name="first_name"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 form-control"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
      </div>
  
      <div className="w-[270px] p-2">
        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Last Name<span className='text-[red]'>*</span></label>
        <input
          type="text"
          name="last_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 form-control"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
      </div>
  
      <div className="w-[270px] p-2">
        <label htmlFor="other_name" className="block mb-2 text-sm font-medium text-gray-900">Other Name<span className='text-[red]'>*</span></label>
        <input
          type="text"
          name="other_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 form-control"
          value={formData.other_name}
          onChange={handleChange}
        />
      </div>
  
      <div className="w-[200px] p-2 mt-[0px]">
        <label htmlFor="phone_number_1" className="block mb-2 text-sm font-medium text-gray-900">Phone Number 1<span className='text-[red]'>*</span></label>
        <input
          type="text"
          name="phone_number_1"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 form-control"
          value={formData.phone_number_1}
          onChange={handleChange}
          required
        />
      </div>
  
      <div className="w-[270px] p-2">
        <label htmlFor="phone_number_2" className="block mb-2 text-sm font-medium text-gray-900">Phone Number 2<span className='text-[red]'>*</span></label>
        <input
          type="text"
          name="phone_number_2"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 form-control"
          value={formData.phone_number_2}
          onChange={handleChange}
        />
      </div>
  
      <div className="w-[270px] p-2">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email<span className='text-[red]'>*</span></label>
        <input
          type="email"
          name="email"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 form-control"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
  
      <div className="w-[270px] p-2">
        <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900">Gender<span className='text-[red]'>*</span></label>
        <select
          name="gender"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 form-control"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
        </select>
      </div>
  
      <div className="w-[270px] p-2">
        <label htmlFor="employment_type" className="block mb-2 text-sm font-medium text-gray-900">Employment Type<span className='text-[red]'>*</span></label>
        <select
          name="employment_type"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 form-control"
          value={formData.employment_type}
          onChange={handleChange}
          required
        >
    <option value="FULLTIME">Fulltime</option>
  <option value="GRADUATE_ASSISTANT">Graduate Assistant</option>
<option value="PART_TIME">Part-time</option>
<option value="INTERN">Intern</option>
<option value="CORPER">Corper</option>
        </select>
      </div>
      <div className="w-[270px] p-2">
        <label htmlFor="employment_type" className="block mb-2 text-sm font-medium text-gray-900">Staff Type<span className='text-[red]'>*</span></label>
        <select
          name="staff_type"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 form-control"
          value={formData.staff_type}
          onChange={handleChange}
          required
        >
          <option value="NONTEACHING">NONTEACHING</option>
          <option value="TEACHING">TEACHING</option>
        </select>
      </div>
  
      <div className="w-[270px] p-2">
        <label htmlFor="position" className="block mb-2 text-sm font-medium text-gray-900">Position<span className='text-[red]'>*</span></label>
        <input
          type="text"
          name="position"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 form-control"
          value={formData.position}
          onChange={handleChange}
          required
        />
      </div>
  
      <div className="w-[270px] p-2">
        <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900">Status<span className='text-[red]'>*</span></label>
        <input
          type="text"
          name="status"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 form-control"
          value={formData.status}
          onChange={handleChange}
          required
        />
      </div>
  
      <div className="w-[270px] p-2">
        <label htmlFor="home_address" className="block mb-2 text-sm font-medium text-gray-900">Home Address<span className='text-[red]'>*</span></label>
        <input
          type="text"
          name="home_address"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 form-control"
          value={formData.home_address}
          onChange={handleChange}
          required
        />
      </div>
  
      <div className="w-[270px] p-2">
        <label htmlFor="state_of_origin" className="block mb-2 text-sm font-medium text-gray-900">State of Origin<span className='text-[red]'>*</span></label>
        <input
          type="text"
          name="state_of_origin"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 form-control"
          value={formData.state_of_origin}
          onChange={handleChange}
          required
        />
      </div>
  
      <div className="w-[270px] p-2">
        <label htmlFor="local_government_area" className="block mb-2 text-sm font-medium text-gray-900">Local Government Area<span className='text-[red]'>*</span></label>
        <input
          type="text"
          name="local_government_area"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 form-control"
          value={formData.local_government_area}
          onChange={handleChange}
          required
        />
      </div>
  
      <div className="w-[270px] ml-[0] p-2">
        <label htmlFor="nin" className="block mb-2 text-sm font-medium text-gray-900">NIN<span className='text-[red]'>*</span></label>
        <input
          type="text"
          name="nin"
       
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 form-control"
          value={formData.nin}
          onChange={handleChange}
          required
        />
      </div>
  
      <div className="w-[270px] p-2">
        <label htmlFor="bvn" className="block mb-2 text-sm font-medium text-gray-900">BVN<span className='text-[red]'>*</span></label>
        <input
          type="text"
          name="bvn"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 form-control"
       
          value={formData.bvn}
          onChange={handleChange}
          required
        />
      </div>
  
      {/* <div className="mb-3 col-md-4">
        <label htmlFor="staff_id" className="form-label">Staff ID</label>
        <input
          type="text"
          name="staff_id"
          className="form-control"
          value={formData.staff_id}
          onChange={handleChange}
          required
        />
      </div> */}
      
  
    
    </div>
    <button type="submit" className="w-1/4 md:ml-[419px] mt-[30px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
  </form>
   </div>
  );
};

export default CreateTeacher;

