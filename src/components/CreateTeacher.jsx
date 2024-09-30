// import React, { useState } from "react";
// import Swal from 'sweetalert2';

// const CreateTeacher = () => {
//   const [errors, setErrors] = useState({});

//   const validateForm = (formData) => {
//     const newErrors = {};
//     if (!formData.get("first_name")) newErrors.first_name = "First Name is required.";
//     if (!formData.get("last_name")) newErrors.last_name = "Last Name is required.";
//     if (!formData.get("phone_number_1")) newErrors.phone_number_1 = "Phone Number is required.";
//     if (!formData.get("email")) newErrors.email = "Email is required.";
//     if (!formData.get("gender")) newErrors.gender = "Gender is required.";
//     if (!formData.get("employment_type")) newErrors.employment_type = "Employment Type is required.";
//     if (!formData.get("home_address")) newErrors.home_address = "Home Address is required.";
//     if (!formData.get("local_government_area")) newErrors.local_government_area = "Local Government Area is required.";
//     if (!formData.get("state_of_origin")) newErrors.state_of_origin = "State of Origin is required.";
//     if (!formData.get("date_of_birth")) newErrors.date_of_birth = "Date of Birth is required.";
//     if (!formData.get("staff_type")) newErrors.staff_type = "Staff Type is required.";
//     if (!formData.get("status")) newErrors.status = "Status is required.";

//     return newErrors;
//   };

 

//   const handleSubmit = async (event) => {
//       event.preventDefault();
      
//       const formData = new FormData(event.target);
//       const validationErrors = validateForm(formData);
  
//       if (Object.keys(validationErrors).length > 0) {
//           setErrors(validationErrors);
//           Swal.fire({
//               icon: 'error',
//               title: 'Validation Error',
//               text: 'Please correct the highlighted errors before submitting.',
//           });
//           return;
//       }
  
//       try {
//           const response = await fetch('https://service.verbumdeiportal.com/staff/staff/', {
//               method: 'POST',
//               body: formData,
//           });
  
//           if (!response.ok) {
//               throw new Error('Network response was not ok');
//           }
  
//           const data = await response.json();
//           Swal.fire({
//               icon: 'success',
//               title: 'Success',
//               text: 'Teacher added successfully!',
//           });
//           event.target.reset();
//           setErrors({});
//       } catch (error) {
//           console.error('Error adding teacher:', error);
//           Swal.fire({
//               icon: 'error',
//               title: 'Error',
//               text: 'Failed to add teacher. Please try again.',
//           });
//       }
//   };
  
//   return (
//     <div className="dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px] ">
//       <form onSubmit={handleSubmit} className="max-w-3xl p-6 mx-auto bg-white rounded-lg shadow-lg">
//         <main className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
//           {/* File Upload Section */}
//           <div className="flex items-center justify-center border-2 border-gray-300 rounded-lg p-2 h-[70px] bg-gray-50">
//             <input
//               type="file"
//               id="upload"
//               name="upload"
//               accept="image/*"
//               className="flex-grow px-3 py-2 font-medium text-gray-800 dark:bg-gray-900 dark:text-gray-300"
//               required
//             />
//           </div>

//           {/* First Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">First Name: <span className="text-red-500">*</span></label>
//             <input
//               type="text"
//               name="first_name"
//               id="first_name"
//               className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//               required
//             />
//             {errors.first_name && <p className="mt-1 text-sm text-red-500">{errors.first_name}</p>}
//           </div>

//           {/* Last Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Last Name:</label>
//             <input
//               type="text"
//               name="last_name"
//               id="last_name"
//               className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//             />
//             {errors.last_name && <p className="mt-1 text-sm text-red-500">{errors.last_name}</p>}
//           </div>

//           {/* Phone Number */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
//             <input
//               type="text"
//               name="phone_number_1"
//               id="phone_number_1"
//               className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//             />
//             {errors.phone_number_1 && <p className="mt-1 text-sm text-red-500">{errors.phone_number_1}</p>}
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email:</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//             />
//             {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
//           </div>

//           {/* Gender */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Gender:</label>
//             <select
//               name="gender"
//               id="gender"
//               className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//             >
//               <option value="">Select Gender</option>
//               <option value="MALE">Male</option>
//               <option value="FEMALE">Female</option>
//             </select>
//             {errors.gender && <p className="mt-1 text-sm text-red-500">{errors.gender}</p>}
//           </div>

//           {/* Employment Type */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Employment Type:</label>
//             <select
//               name="employment_type"
//               id="employment_type"
//               className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//             >
//               <option value="">Select Employment Type</option>
//               <option value="FULLTIME">Fulltime</option>
//               <option value="GRADUATE_ASSISTANT">Graduate Assistant</option>
//               <option value="PART_TIME">Part-time</option>
//               <option value="INTERN">Intern</option>
//               <option value="CORPER">Corper</option>
//             </select>
//             {errors.employment_type && <p className="mt-1 text-sm text-red-500">{errors.employment_type}</p>}
//           </div>

//           {/* Home Address */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Home Address:</label>
//             <input
//               type="text"
//               name="home_address"
//               id="home_address"
//               className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//             />
//             {errors.home_address && <p className="mt-1 text-sm text-red-500">{errors.home_address}</p>}
//           </div>

//           {/* Local Government Area */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Local Government Area:</label>
//             <input
//               type="text"
//               name="local_government_area"
//               id="local_government_area"
//               className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//             />
//             {errors.local_government_area && <p className="mt-1 text-sm text-red-500">{errors.local_government_area}</p>}
//           </div>

//           {/* State of Origin */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">State of Origin:</label>
//             <input
//               type="text"
//               name="state_of_origin"
//               id="state_of_origin"
//               className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//             />
//             {errors.state_of_origin && <p className="mt-1 text-sm text-red-500">{errors.state_of_origin}</p>}
//           </div>

//           {/* NIN */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">NIN:</label>
//             <input
//               type="text"
//               name="nin"
//               id="nin"
//               className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//             />
//           </div>

//           {/* BVN */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">BVN:</label>
//             <input
//               type="text"
//               name="bvn"
//               id="bvn"
//               className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//             />
//           </div>

//           {/* Staff Type */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Staff Type:</label>
//             <select
//               name="staff_type"
//               id="staff_type"
//               className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//             >
//               <option value="">Select Staff Type</option>
//               <option value="TEACHING">Teaching</option>
//               <option value="NON_TEACHING">Non-teaching</option>
//             </select>
//             {errors.staff_type && <p className="mt-1 text-sm text-red-500">{errors.staff_type}</p>}
//           </div>

//           {/* Status */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Status:</label>
//             <select
//               name="status"
//               id="status"
//               className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//             >
//               <option value="">Select Status</option>
//               <option value="ACTIVE">Active</option>
//               <option value="INACTIVE">Inactive</option>
//             </select>
//             {errors.status && <p className="mt-1 text-sm text-red-500">{errors.status}</p>}
//           </div>

//           {/* Date of Birth */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Date of Birth<span className="text-red-500">*</span></label>
//             <input
//               type="date"
//               id="date_of_birth"
//               name="date_of_birth"
//               className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//               required
//             />
//             {errors.date_of_birth && <p className="mt-1 text-sm text-red-500">{errors.date_of_birth}</p>}
//           </div>

//           {/* Position */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Position:</label>
//             <input
//               type="text"
//               name="position"
//               id="position"
//               className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//             />
//           </div>
//         </main>

//         <button type="submit" className="px-4 py-2 mt-6 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
//           Add Staff
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateTeacher;



import React, { useState } from "react";
import Swal from 'sweetalert2';

const CreateTeacher = () => {
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};
    if (!formData.get("first_name")) newErrors.first_name = "First Name is required.";
    if (!formData.get("last_name")) newErrors.last_name = "Last Name is required.";
    if (!formData.get("phone_number_1")) newErrors.phone_number_1 = "Phone Number is required.";
    if (!formData.get("email")) newErrors.email = "Email is required.";
    if (!formData.get("gender")) newErrors.gender = "Gender is required.";
    if (!formData.get("employment_type")) newErrors.employment_type = "Employment Type is required.";
    if (!formData.get("home_address")) newErrors.home_address = "Home Address is required.";
    if (!formData.get("local_government_area")) newErrors.local_government_area = "Local Government Area is required.";
    if (!formData.get("state_of_origin")) newErrors.state_of_origin = "State of Origin is required.";
    if (!formData.get("date_of_birth")) newErrors.date_of_birth = "Date of Birth is required.";
    if (!formData.get("staff_type")) newErrors.staff_type = "Staff Type is required.";
    if (!formData.get("status")) newErrors.status = "Status is required.";

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      Swal.fire({
          icon: 'error',
          title: 'Validation Error',
          text: 'Please correct the highlighted errors before submitting.',
      });
      return;
    }

    try {
      const response = await fetch('https://service.verbumdeiportal.com/staff/staff/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Teacher added successfully!',
      });
      event.target.reset();
      setErrors({});
    } catch (error) {
      console.error('Error adding teacher:', error);
      Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to add teacher. Please try again.',
      });
    }
  };

  return (
    <div className="dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px]">
      <form onSubmit={handleSubmit} className="max-w-3xl p-6 mx-auto bg-white rounded-lg shadow-lg">
        <main className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
          {/* File Upload Section */}
          <div className="flex items-center justify-center border-2 border-gray-300 rounded-lg p-2 h-[70px] bg-gray-50">
            <input
              type="file"
              id="upload"
              name="upload"
              accept="image/*"
              className="flex-grow px-3 py-2 font-medium text-gray-800"
              required
            />
          </div>

          {/* Form Fields */}
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name: <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
            {errors.first_name && <p className="mt-1 text-sm text-red-500">{errors.first_name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name:</label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.last_name && <p className="mt-1 text-sm text-red-500">{errors.last_name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
            <input
              type="text"
              name="phone_number_1"
              id="phone_number_1"
              className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.phone_number_1 && <p className="mt-1 text-sm text-red-500">{errors.phone_number_1}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Gender:</label>
            <select
              name="gender"
              id="gender"
              className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="">Select Gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
            {errors.gender && <p className="mt-1 text-sm text-red-500">{errors.gender}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Employment Type:</label>
            <select
              name="employment_type"
              id="employment_type"
              className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="">Select Employment Type</option>
              <option value="FULLTIME">Fulltime</option>
              <option value="GRADUATE_ASSISTANT">Graduate Assistant</option>
              <option value="PART_TIME">Part-time</option>
              <option value="INTERN">Intern</option>
              <option value="CORPER">Corper</option>
            </select>
            {errors.employment_type && <p className="mt-1 text-sm text-red-500">{errors.employment_type}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Home Address:</label>
            <input
              type="text"
              name="home_address"
              id="home_address"
              className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.home_address && <p className="mt-1 text-sm text-red-500">{errors.home_address}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Local Government Area:</label>
            <input
              type="text"
              name="local_government_area"
              id="local_government_area"
              className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.local_government_area && <p className="mt-1 text-sm text-red-500">{errors.local_government_area}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">State of Origin:</label>
            <input
              type="text"
              name="state_of_origin"
              id="state_of_origin"
              className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.state_of_origin && <p className="mt-1 text-sm text-red-500">{errors.state_of_origin}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">NIN:</label>
            <input
              type="text"
              name="nin"
              id="nin"
              className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">BVN:</label>
            <input
              type="text"
              name="bvn"
              id="bvn"
              className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Staff Type:</label>
            <select
              name="staff_type"
              id="staff_type"
              className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="">Select Staff Type</option>
              <option value="TEACHING">Teaching</option>
              <option value="NON_TEACHING">Non-teaching</option>
            </select>
            {errors.staff_type && <p className="mt-1 text-sm text-red-500">{errors.staff_type}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Status:</label>
            <select
              name="status"
              id="status"
              className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="">Select Status</option>
              <option value="ACTIVE">Active</option>
              <option value="INACTIVE">Inactive</option>
            </select>
            {errors.status && <p className="mt-1 text-sm text-red-500">{errors.status}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth<span className="text-red-500">*</span></label>
            <input
              type="date"
              id="date_of_birth"
              name="date_of_birth"
              className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
            {errors.date_of_birth && <p className="mt-1 text-sm text-red-500">{errors.date_of_birth}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Position:</label>
            <input
              type="text"
              name="position"
              id="position"
              className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
        </main>

        <button type="submit" className="px-4 py-2 mt-6 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
          Add Staff
        </button>
      </form>
    </div>
  );
};

export default CreateTeacher;

