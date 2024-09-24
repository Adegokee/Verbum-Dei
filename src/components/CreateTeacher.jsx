import React, { useState } from "react";

const CreateTeacher= () => {


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);

    try {
        const response = await fetch('https://service.verbumdeiportal.com/staff/staff/', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        alert('Teacher added successfully!');
        event.target.reset();
    } catch (error) {
        console.error('Error adding student:', error);
    }

};

  return (
   <div className="dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px] ">
     <form onSubmit={handleSubmit}>
<main className='flex justify-center'>
<div className="items-center justify-center w-[270px] border-2 border-gray-400 h-[70px]">
            <input
              type="file"
              id="upload"
              name="upload"
              accept="image/*"
            className="w-[167px] flex-grow font-medium px-3 py-2 text-ellipsis dark:bg-gray-900 text-gray-300 dark:text-gray-300"
              required
            />
      
        </div>
      <div className="w-[270px] p-2 ">
        <label>First Name: <span className="text-[red]">*</span>
        </label>
       <div>
       <input
          type="text"
          name="first_name"
          id="first_name"
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        
        />
       </div>
       
      </div>

      <div className="w-[270px] p-2 ">
        <label>Last Name:</label>
        <input
          type="text"
          name="last_name"
          id= "last_name"
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          // value={formData.last_name}
          // onChange={handleChange}
        />
        {/* {errors.last_name && <p>{errors.last_name[0]}</p>} */}
      </div>

      <div className="w-[270px] p-2 ">
        <label>Phone Number:</label>
        <input
          type="text"
          name="phone_number_1"
          id="phone_number_1"
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          // value={formData.phone_number_1}
          // onChange={handleChange}
        />
        {/* {errors.phone_number_1 && <p>{errors.phone_number_1[0]}</p>} */}
      </div>
</main>

    <main className="flex justify-center">
    <div className="w-[270px] p-2 ">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          // value={formData.email}
          // onChange={handleChange}
        />
        {/* {errors.email && <p>{errors.email[0]}</p>} */}
      </div>

      <div className="w-[270px] p-2 ">
        <label>Gender:</label>
        <select
         name="gender" 
         id="gender"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        //  value={formData.gender} 
        //  onChange={handleChange}
         >
          <option value="">Select Gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
        </select>
        {/* {errors.gender && <p>{errors.gender[0]}</p>} */}
      </div>

      <div className="w-[270px] p-2 ">
        <label>Employment Type:</label>
        <select
          name="employment_type"
          id="employment_type"
          className="border bg-white font-medium min-w-20 rounded-md shadow-sm text-gray-500 text-sm focus:ring focus:ring-primary-300 focus:border-primary-600 focus:outline-none dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 dark:focus:border-primary-600 dark:focus:ring-primary-700 px-3 py-2 w-full pr-8 max-w-2xl appearance-none"
          // value={formData.employment_type}
          // onChange={handleChange}
        >
          <option value="">Select Employment Type</option>
          <option value="FULLTIME">Fulltime</option>
          <option value="GRADUATE_ASSISTANT">Graduate Assistant</option>
          <option value="PART_TIME">Part-time</option>
          <option value="INTERN">Intern</option>
          <option value="CORPER">Corper</option>
        </select>
        {/* {errors.employment_type && <p>{errors.employment_type[0]}</p>} */}
      </div>

      <div className="w-[270px] p-2 ">
        <label>Home Address:</label>
        <input
          type="text"
          name="home_address"
          id="home_address"
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          // value={formData.home_address}
          // onChange={handleChange}
        />
        {/* {errors.home_address && <p>{errors.home_address[0]}</p>} */}
      </div>
    </main>

  <main className="flex justify-center">
  <div className="w-[270px] p-2 ">
        <label>Local Government Area:</label>
        <input
          type="text"
          name="local_government_area"
          id="local_government_area"
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          // value={formData.local_government_area}
          // onChange={handleChange}
        />
        {/* {errors.local_government_area && <p>{errors.local_government_area[0]}</p>} */}
      </div>

      <div className="w-[270px] p-2 ">
        <label>State of Origin:</label>
        <input
          type="text"
          name="state_of_origin"
          id="state_of_origin"
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          // value={formData.state_of_origin}
          // onChange={handleChange}
          
        />
        {/* {errors.state_of_origin && <p>{errors.state_of_origin[0]}</p>} */}
      </div>

      <div className="w-[270px] p-2 " >
        <label>NIN:</label>
        <input
          type="text"
          name="nin"
          id="nin"
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          // value={formData.nin}
          // onChange={handleChange}
        />
        {/* {errors.nin && <p>{errors.nin[0]}</p>} */}
      </div>

      <div className="w-[270px] p-2 ">
        <label>BVN:</label>
        <input
          type="text"
          name="bvn"
          id="bvn"
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          // value={formData.bvn}
          // onChange={handleChange}
        />
        {/* {errors.bvn && <p>{errors.bvn[0]}</p>} */}
      </div>
  </main>

 <main className="flex justify-center">
 <div className="w-[270px] p-2 ">
    <label>Staff Type:</label>
    <select
      name="staff_type"
      id="staff_type"
      className="border bg-white font-medium min-w-20 rounded-md shadow-sm text-gray-500 text-sm focus:ring focus:ring-primary-300 focus:border-primary-600 focus:outline-none group-[.errors]:border-red-600 group-[.errors]:focus:ring-red-200 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 dark:focus:border-primary-600 dark:focus:ring-primary-700 dark:focus:ring-opacity-50 dark:group-[.errors]:border-red-500 dark:group-[.errors]:focus:ring-red-600/40 px-3 py-2 w-full pr-8 max-w-2xl appearance-none"
      // value={formData.staff_type}
      // onChange={handleChange}
    >
      <option value="">Select Staff Type</option>
      <option value="TEACHING">Teaching</option>
      <option value="NON_TEACHING">Non-teaching</option>
    </select>
    {/* {errors.staff_type && <p>{errors.staff_type[0]}</p>} */}
  </div>

  <div className="w-[270px] p-2">
    <label>Status:</label>
    <select
      name="status"
      id="status"
      className="border bg-white font-medium min-w-20 rounded-md shadow-sm text-gray-500 text-sm focus:ring focus:ring-primary-300 focus:border-primary-600 focus:outline-none group-[.errors]:border-red-600 group-[.errors]:focus:ring-red-200 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-300 dark:focus:border-primary-600 dark:focus:ring-primary-700 dark:focus:ring-opacity-50 dark:group-[.errors]:border-red-500 dark:group-[.errors]:focus:ring-red-600/40 px-3 py-2 w-full pr-8 max-w-2xl appearance-none"
      // value={formData.status}
      // onChange={handleChange}
    >
      <option value="">Select Status</option>
      <option value="ACTIVE">Active</option>
      <option value="INACTIVE">Inactive</option>
    </select>
    {/* {errors.status && <p>{errors.status[0]}</p>} */}
  </div>

      <div className="w-[270px] p-2 ">
        <label>Position:</label>
        <input
          type="text"
          name="position"
          id="position"
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          // value={formData.position}
          // onChange={handleChange}
        />
        {/* {errors.position && <p>{errors.position[0]}</p>} */}
      </div>
 </main>

      <button type="submit"  className="bg-blue-400 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.5 md:ml-[500px]">Add Staff</button>
    </form>
   </div>
  );
};

export default CreateTeacher;
