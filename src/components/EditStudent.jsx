import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [formData, setFormData] = useState({
    // registration_id: "",
    first_name: "",
    other_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "",
    type: "",
    home_address: "",
    state_of_origin: "",
    local_government_area: "",
    nationality: "",
    parent: "",
    religion: "",
    upload: "", 
    img_url: "",
    class_assigned: "",
  });

  useEffect(() => {
    // Fetch the student's data
    fetch(`https://verbumdei-management-system-vms.onrender.com/student/student/${id}`)
      .then(response => response.json())
      .then(data => {
        setStudent(data);
        setFormData({
          registration_id: data.registration_id || "",
          first_name: data.first_name || "",
          other_name: data.other_name || "",
          last_name: data.last_name || "",
          date_of_birth: data.date_of_birth || "",
          gender: data.gender || "",
          type: data.type || "",
          home_address: data.home_address || "",
          state_of_origin: data.state_of_origin || "",
          local_government_area: data.local_government_area || "",
          nationality: data.nationality || "",
          parent: data.parent || "",
          religion: data.religion || "",
          upload: data.upload ||  null,
          img_url: data.img_url || "",
          class_assigned: data.class_assigned || "",
        });
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the student's data
    fetch(`https://verbumdei-management-system-vms.onrender.com/student/student/${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(() => {
        navigate(`/student/${id}`);
      });
      alert("Student's profile has successfully been updated.");
  };

  return (
    <div className="edit-student dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px]">
      <h1 className='text-[#007bff] text-[20px] font-semibold'>Update Students's Profile</h1>
      {student ? (
       <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white shadow-md rounded-lg">
      <nav className='flex justify-around'>
      <div className="flex flex-col w-[250px]">
      <label className="mb-1 text-gray-700">Firat Name</label>
         <input
           type="text"
           name="first_name"
           value={formData.first_name}
           onChange={handleChange}
           placeholder="First Name"
           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007bff] placeholder-gray-500"
         />
       </div>
     
       <div className="flex flex-col w-[250px]">
       <label className="mb-1 text-gray-700">Last Name</label>
         <input
           type="text"
           name="last_name"
           value={formData.last_name}
           onChange={handleChange}
           placeholder="Last Name"
           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007bff] placeholder-gray-500"
         />
       </div>
     
       <div className="flex flex-col w-[250px]">
       <label className="mb-1 text-gray-700">Other Name</label>
         <input
           type="text"
           name="other_name"
           value={formData.other_name}
           onChange={handleChange}
           placeholder="Other Name"
           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007bff] placeholder-gray-500"
         />
       </div>
     
      </nav>
     
     <nav className='flex justify-around'>
     <div className="flex flex-col w-[250px]">
       <label className="mb-1 text-gray-700">Date of Birth</label>
         <input
           type="date"
           name="date_of_birth"
           value={formData.date_of_birth}
           onChange={handleChange}
           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007bff]"
         />
       </div>
     
       <div className="flex flex-col w-[250px]">
         <label className="mb-1 text-gray-700">Gender</label>
         <input
           type="text"
           name="gender"
           value={formData.gender}
           onChange={handleChange}
           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007bff] placeholder-gray-500"
         />
       </div>
     
       <div className="flex flex-col w-[250px]">
       <label className="mb-1 text-gray-700">Home Adress</label>
         <input
           type="text"
           name="home_address"
           value={formData.home_address}
           onChange={handleChange}
           placeholder="Home Address"
           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007bff] placeholder-gray-500"
         />
       </div>
     </nav>
     
       <nav className='flex justify-around'>
       <div className="flex flex-col w-[250px]">
       <label className="mb-1 text-gray-700">State of Origin</label>
         <input
           type="text"
           name="state_of_origin"
           value={formData.state_of_origin}
           onChange={handleChange}
           placeholder="State of Origin"
           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007bff] placeholder-gray-500"
         />
       </div>
     
       <div className="flex flex-col w-[250px]">
       <label className="mb-1 text-gray-700">Local Government Area</label>
         <input
           type="text"
           name="local_government_area"
           value={formData.local_government_area}
           onChange={handleChange}
           placeholder="Local Government Area"
           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007bff] placeholder-gray-500"
         />
       </div>
     
       <div className="flex flex-col w-[250px]">
       <label className="mb-1 text-gray-700">Nationality</label>
         <input
           type="text"
           name="nationality"
           value={formData.nationality}
           onChange={handleChange}
           placeholder="Nationality"
           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007bff] placeholder-gray-500"
         />
       </div>
     
       </nav>
      <nav className='flex justify-around'>
      <div className="flex flex-col w-[250px]">
       <label className="mb-1 text-gray-700">Parent Name</label>
         <input
           type="text"
           name="parent"
           value={formData.parent}
           onChange={handleChange}
           placeholder="Parent/Guardian Name"
           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007bff] placeholder-gray-500"
         />
       </div>
     
       <div className="flex flex-col w-[250px]">
         <input
           type="text"
           name="religion"
           value={formData.religion}
           onChange={handleChange}
           placeholder="Religion"
           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007bff] placeholder-gray-500"
         />
       </div>
     
       <div className="flex flex-col w-[250px]">
         <label className="mb-1 text-gray-700">Image URL</label>
         <input
           type="text"
           name="img_url"
           value={formData.img_url}
           onChange={handleChange}
           placeholder="Image URL"
           className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#007bff] placeholder-gray-500"
         />
       </div>
        </nav>     
      <nav className='flex justify-center'>
      <div className="flex flex-col w-[250px]">
         <input
           type="text"
           name="class_assigned"
           value={formData.class_assigned}
           onChange={handleChange}
           placeholder="Class Assigned"
           className="p-3 mr-[50px] border border-gray-300 rounded-lg focus:outline-none focus:border-[#007bff] placeholder-gray-500"
         />
       </div>
     
       <div className="flex flex-col w-[250px]">
         <button
           type="submit"
           className="w-full py-2 px-4 bg-[#007bff] text-white rounded-lg hover:bg-[#0056b3] transition-colors"
         >
           Submit
         </button>
       </div>
      </nav>
     </form>
     
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditStudent;
