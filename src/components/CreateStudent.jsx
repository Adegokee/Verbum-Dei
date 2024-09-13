import React,{useState, useEffect} from 'react';

const StudentCreate = ({myparent, myclass}) => {



    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);

        try {
            const response = await fetch('https://verbumdei-management-system-vms.onrender.com/student/students/', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            alert('Student added successfully!');
            event.target.reset();
        } catch (error) {
            console.error('Error adding student:', error);
        }

    };

    return (
        <div className="dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px] ">
          
           

<form id="student-form" onSubmit={handleSubmit} encType="multipart/form-data">
  <div className="flex  justify-between">

       {/* Upload Profile Image */}
<main className='flex flex-wrap items-center'>
<div className="items-center justify-center w-[300px] h-[210px]">
          <label htmlFor="profile_img" className="flex flex-col items-center mb-[30px] justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    <input
              type="file"
              id="upload"
              name="upload"
              accept="image/*"
            className="w-[167px] flex-grow font-medium px-3 py-2 text-ellipsis dark:bg-gray-900 text-gray-300 dark:text-gray-300"
              required
            />
             </div>
            
            
          </label>
      
        </div>
      
    {/* First Name */}
    <div className="w-[270px] mt-[40px] p-2">
      <label htmlFor="first_name"  className="block mb-2 text-sm font-medium text-gray-900">
        First Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="first_name"
        name="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
      />
    </div>

    {/* Other Name */}
    <div className=" w-[270px] p-2 ">
      <label htmlFor="other_name"  className="block mb-2 text-sm font-medium text-gray-900">
        Other Name
      </label>
      <input
        type="text"
        id="other_name"
        name="other_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </div>

    {/* Last Name */}
    <div className=" w-[270px]  p-2">
      <label htmlFor="last_name"  className="block mb-2 text-sm font-medium text-gray-900">
        Last Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="last_name"
        name="last_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
      />
    </div>

    {/* Date of Birth */}
    <div className=" w-[300px]  p-2 ">
      <label htmlFor="date_of_birth"  className="block mb-2 text-sm font-medium text-gray-900">
        Date of Birth <span className="text-red-500">*</span>
      </label>
      <input
        type="date"
        id="date_of_birth"
        name="date_of_birth"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
      />
    </div>

</main>



<main className='flex flex-wrap items-center'>
      {/* Gender */}
      <div className="mb-[2px] w-[270px] lg:w-[350px]  p-2">
      <label htmlFor="gender"  className="block mb-2 text-sm font-medium text-gray-900">
        Gender <span className="text-red-500">*</span>
      </label>
      <select
        id="gender"
        name="gender"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
      >
        <option value="">Select Gender</option>
        <option value="MALE">MALE</option>
        <option value="FEMALE">FEMALE</option>
      </select>
    </div>

    {/* Type */}
    <div className=" w-[270px] lg:w-[350px]  p-2 ">
      <label htmlFor="type"  className="block mb-2 text-sm font-medium text-gray-900">
        Type <span className="text-red-500">*</span>
      </label>
      <select
        id="type"
        name="type"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
      >
        <option value="">Select Type</option>
        <option value="BOARDER">BOARDER</option>
        <option value="DAY">DAY</option>
      </select>
    </div>

    {/* Home Address */}
    <div className=" w-[270px] p-2">
      <label htmlFor="home_address"  className="block mb-2 text-sm font-medium text-gray-900">
        Home Address <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="home_address"
        name="home_address"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
      />
    </div>

    {/* State of Origin */}
    <div className=" w-[270px] p-2">
      <label htmlFor="state_of_origin"  className="block mb-2 text-sm font-medium text-gray-900">
        State of Origin <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="state_of_origin"
        name="state_of_origin"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
      />
    </div>
</main>

 <div className="flex flex-wrap items-center">
     {/* Local Government Area */}
     <div className="w-[270px]  p-2">
      <label htmlFor="local_government_area"  className="block mb-2 text-sm font-medium text-gray-900">
        Local Government Area <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="local_government_area"
        name="local_government_area"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
      />
    </div>

    {/* Nationality */}
    <div className="w-[270px] p-2">
      <label htmlFor="nationality"  className="block mb-2 text-sm font-medium text-gray-900">
        Nationality <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="nationality"
        name="nationality"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
      />
    </div>

    {/* Parent */}
    <div className=" w-[270px] p-2 ">
      <label htmlFor="parent"  className="block mb-2 text-sm font-medium text-gray-900">
        Parent <span className="text-red-500">*</span>
      </label>
      <select
        id="parent"
        name="parent"
       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
      >
        {myparent.map((x) => (
          <option key={x.parent_name} value={x.parent_name}>
            {x.parent_name}
          </option>
        ))}
      </select>
    </div>

    {/* Religion */}
    <div className="w-[270px] p-2 ">
      <label htmlFor="religion"  className="block mb-2 text-sm font-medium text-gray-900">
        Religion <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="religion"
        name="religion"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
      />
    </div>

    {/* Class Assigned */}
      <div className="w-[270px] p-2 ">
      <label htmlFor="cla"  className="block mb-2 text-sm font-medium text-gray-900">
        Class Assigned<span className="text-red-500">*</span>
      </label>
      <select
        id="class_assigned"
        name="class_assigned"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        required
      >
        {myclass.map((x) => (
          <option key={x.id} value={x.name}>
            {x.name}
          </option>
        ))}
      </select>
    </div>
 </div>

 
  </div>

  <div className="flex justify-center">
    <button type="submit" className="w-1/4 md:ml-[29px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
      Submit
    </button>
  </div>
</form>

        </div>


        // <div className='w-[350px] mr-[25px]'>
               
        // <div className=' '>
        //   <label className="block mb-2 text-sm font-medium text-gray-900">Type<span className='text-[red]'>*</span></label>
        //   <select name="type" value={type} onChange={(e) =>   setType(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
        //     <option value="" disabled>Select Type</option>
        //     <option value="DAY">Day</option>
        //     <option value="BOARDER">Boarder</option>
        //   </select>
        //   {errors.type && <p className="mt-1 text-sm text-red-500 ">{errors.type}</p>}
        // </div>

     
        // <div>
        //   <label  className="block mb-2 text-sm font-medium text-gray-900">First Name<span className='text-[red]'>*</span></label>
        //   <input
        //     type="text"
        //     name="first_name"
        //     value={first_name}
        //     onChange={(e) => setFirst_name(e.target.value)}
        //     required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        //   />
        //   {errors.first_name && <p className="mt-1 text-sm text-red-500 ">{errors.first_name}</p>}
        // </div>

        // {/* Other Name */}
        // <div>
        //   <label  className="block mb-2 text-sm font-medium text-gray-900">Other Name<span className='text-[red]'>*</span></label>
        //   <input
        //     type="text"
        //     name="other_name"
        //     value={other_name}
        //     onChange={(e) => setOther_name(e.target.value)}
        //     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        //   />
        //   {errors.other_name && <p className="mt-1 text-sm text-red-500 ">{errors.other_name}</p>}
        // </div>

        // {/* Last Name */}
        // <div>
        //   <label className="block mb-2 text-sm font-medium text-gray-900">Last Name<span className='text-[red]'>*</span></label>
        //   <input
        //     type="text"
        //     name="last_name"
        //     value={last_name}
        //     onChange={(e) =>  setLast_name(e.target.value)}
        //     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        //     required
        //   />
        //   {errors.last_name && <p className="mt-1 text-sm text-red-500 ">{errors.last_name}</p>}
        // </div>

        // {/* Date of Birth */}
        // <div>
        //   <label  className="block mb-2 text-sm font-medium text-gray-900">Date of Birth<span className='text-[red]'>*</span></label>
        //   <input
        //     type="date"
        //     name="date_of_birth"
        //     value={date_of_birth}
        //     onChange={(e) => setDate_of_birth(e.target.value)}
        //     required
        //     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        //   />
        //   {errors.last_name && <p className="mt-1 text-sm text-red-500 ">{errors.last_name}</p>}
        // </div>

        // {/* Gender */}
        // <div>
        //   <label  className="block mb-2 text-sm font-medium text-gray-900">Gender<span className='text-[red]'>*</span></label>
        //   <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        //     <option value="" disabled>Select Gender</option>
        //     <option value="MALE">Male</option>
        //     <option value="FEMALE">Female</option>
        //   </select>
        //   {errors.gender && <p className="mt-1 text-sm text-red-500 ">{errors.gender}</p>}
        // </div>


        // {/* Home Address */}
        // <div>
        //   <label className="block mb-2 text-sm font-medium text-gray-900" >Home Address<span className='text-[red]'>*</span></label>
        //   <input
        //     type="text"
        //     name="home_address"
        //     value={home_address}
        //     onChange={(e) => setHome_address(e.target.value)}
        //     required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        //   />
        //   {errors.gender && <p className="mt-1 text-sm text-red-500 ">{errors.gender}</p>}
        // </div>
        // </div>

        // <div className='w-[350px] mr-[25px]'>
             
        // <div className=''>
        //   <label className="block mb-2 text-sm font-medium text-gray-900">State of Origin<span className='text-[red]'>*</span></label>
        //   <input
        //     type="text"
        //     name="state_of_origin"
        //     value={state_of_origin}
        //     onChange={(e) => setState_of_origin(e.target.value)}
        //     required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        //   />
        //   {errors.state_of_origin && <p className="mt-1 text-sm text-red-500 ">{errors.state_of_origin}</p>}
        // </div>

        // {/* Local Government Area */}
        // <div>
        //   <label className="block mb-2 text-sm font-medium text-gray-900">Local Government Area<span className='text-[red]'>*</span></label>
        //   <input
        //     type="text"
        //     name="local_government_area"
        //     value={local_government_area}
        //     onChange={(e) => setLocal_government_area(e.target.value)}
        //     required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        //   />
        //   {errors.local_government_area && <p className="mt-1 text-sm text-red-500 ">{errors.local_government_area}</p>}
        // </div>

        // {/* Nationality */}
        // <div>
        //   <label className="block mb-2 text-sm font-medium text-gray-900">Nationality<span className='text-[red]'>*</span></label>
        //   <input
        //     type="text"
        //     name="nationality"
        //     value={nationality}
        //     onChange={(e) => setNationality(e.target.value)}
        //     required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        //   />
        //   {errors.nationality && <p className="mt-1 text-sm text-red-500 ">{errors.nationality}</p>}
        // </div>

        // {/* Parent */}
        // <div className="mr-[]">
        //   <label className="block mb-2 text-sm font-medium text-gray-900">Parent<span className='text-[red]'>*</span></label>
        //   <select name="parent" value={parent} onChange={(e) => setParent(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
        //     <option value="" disabled>Select Parent</option>
        //     {myparent.map((x) => {
            
        //         return (
        //           <option key={x.id} value={x.id}>{x.parent_name}</option>
        //         );
           
        //     })}
        //   </select>
        //   {errors.parent && <p className="mt-1 text-sm text-red-500 ">{errors.parent}</p>}
        // </div>

        // {/* Class Assign */}
        // <div>
        //   <label className="block mb-2 text-sm font-medium text-gray-900">Class Assign<span className='text-[red]'>*</span></label>
        //   <select name="class_assigned" value={class_assigned} onChange={(e) => setClass_assigned(e.target.value)} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" data-context="available-source" id="id_class_assigned">
        //   <option value="" selected="">Select Class</option>
        //   {myclass.map((x)=> (
        //      <option key={x.id} value={x.name} className='text-white bg-black'>{x.name}</option>
           
        //   ))}
         

        // </select>
        // {errors.class_assigned && <p className="mt-1 text-sm text-red-500 ">{errors.class_assigned}</p>}
   
        // </div>

       
        // <div>
        //   <label className="block mb-2 text-sm font-medium text-gray-900">Religion<span className='text-[red]'>*</span></label>
        //   <input
        //     type="text"
        //     name="religion"
        //     value={religion}
        //     onChange={(e) => setReligion(e.target.value)}
        //     required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        //   />
        //   {errors.religion && <p className="mt-1 text-sm text-red-500 ">{errors.religion}</p>}
        // </div>
        // <button className="w-[100%]  text-white bg-blue-700 mt-[34px] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Submit</button>
        // {errors.global && <p className="error">{errors.global}</p>}
        // </div> 
    
  
    );

};

export default StudentCreate;
