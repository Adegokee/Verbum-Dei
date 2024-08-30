import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CreateStudent = ({ addStudent, parentsData }) => {



    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
      type: '',
      registration_id: '',
      first_name: '',
      other_name: '',
      last_name: '',
      date_of_birth: '',
      gender: '',
      home_address: '',
      state_of_origin: '',
      local_government_area: '',
      nationality: '',
      parent: '',
      religion: '',
      profile_image: null,
    });
  
    // Log errors whenever they change
    useEffect(() => {
      if (Object.keys(errors).length > 0) {
        console.error(errors);
      }
    }, [errors]);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleFileChange = (e) => {
      setFormData({ ...formData, profile_image: e.target.files[0] });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const url = "https://sore-ebba-emekadefirst-e04c4e7b.koyeb.app/student/students/";
  
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
  
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: formDataToSend,
        });
  
        const data = await response.json();
  
        if (response.ok) {
          // Handle successful submission
          setFormData({
            type: '',
            registration_id: '',
            first_name: '',
            other_name: '',
            last_name: '',
            date_of_birth: '',
            gender: '',
            home_address: '',
            state_of_origin: '',
            local_government_area: '',
            nationality: '',
            parent: '',
            religion: '',
            profile_image: null,
          });
          setErrors({});
        } else {
          // Handle validation errors
          setErrors(data);
        }
      } catch (error) {
        console.error('Error submitting the form:', error);
        setErrors({ global: 'An error occurred while submitting the form.' });
      }
    };
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
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newReview = {
  //     first_name,
  //     other_name,
  //     last_name,
  //     date_of_birth,
  //     gender,
  //     type,
  //     home_address,
  //     state_of_origin,
  //     local_government_area, 
  //     nationality,
  //     parent,
  //     profile_image,
  //     class_assigned,
 
     
     
  //   };

  //   setFirst_name('');
  //   setOther_name('');
  //   setLast_name('');
  //   setDate_of_birth('');
  //   setGender('');
  //   setType('');
  //   setHome_address('');
  //   setState_of_origin('');
  //   setLocal_government_area('');
  //   setNationality('');
  //   setParent('');
  //   setReligion('');
  //   setProfile_image();
  //   setClass_assigned('');
      
   
  //   addStudent(newReview);
  // };

  return (
    <div className="dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px]">
      <h6 className="p-[10px] text-[#198cff] text-[20px] font-bold">Student Details Registration</h6>
      <form onSubmit={handleSubmit}>
      <div>
        <label>Type</label>
        <select name="type" value={formData.type} onChange={handleInputChange} required>
          <option value="" disabled>Select Type</option>
          <option value="DAY">Day</option>
          <option value="BOARDER">Boarder</option>
        </select>
        {errors.type && errors.type.map((error, index) => <p key={index} className="error">{error}</p>)}
      </div>

      {/* <div>
        <label>Registration ID</label>
        <input
          type="text"
          name="registration_id"
          value={formData.registration_id}
          onChange={handleInputChange}
          required
        />
        {errors.registration_id && errors.registration_id.map((error, index) => <p key={index} className="error">{error}</p>)}
      </div> */}

      <div>
        <label>First Name</label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleInputChange}
          required
        />
        {errors.first_name && errors.first_name.map((error, index) => <p key={index} className="error">{error}</p>)}
      </div>

      <div>
        <label>Other Name</label>
        <input
          type="text"
          name="other_name"
          value={formData.other_name}
          onChange={handleInputChange}
        />
        {errors.other_name && errors.other_name.map((error, index) => <p key={index} className="error">{error}</p>)}
      </div>

      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleInputChange}
          required
        />
        {errors.last_name && errors.last_name.map((error, index) => <p key={index} className="error">{error}</p>)}
      </div>

      <div>
        <label>Date of Birth</label>
        <input
          type="date"
          name="date_of_birth"
          value={formData.date_of_birth}
          onChange={handleInputChange}
          required
        />
        {errors.date_of_birth && errors.date_of_birth.map((error, index) => <p key={index} className="error">{error}</p>)}
      </div>

      <div>
        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleInputChange} required>
          <option value="" disabled>Select Gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
        </select>
        {errors.gender && errors.gender.map((error, index) => <p key={index} className="error">{error}</p>)}
      </div>

      <div>
        <label>Home Address</label>
        <input
          type="text"
          name="home_address"
          value={formData.home_address}
          onChange={handleInputChange}
          required
        />
        {errors.home_address && errors.home_address.map((error, index) => <p key={index} className="error">{error}</p>)}
      </div>

      <div>
        <label>State of Origin</label>
        <input
          type="text"
          name="state_of_origin"
          value={formData.state_of_origin}
          onChange={handleInputChange}
          required
        />
        {errors.state_of_origin && errors.state_of_origin.map((error, index) => <p key={index} className="error">{error}</p>)}
      </div>

      <div>
        <label>Local Government Area</label>
        <input
          type="text"
          name="local_government_area"
          value={formData.local_government_area}
          onChange={handleInputChange}
          required
        />
        {errors.local_government_area && errors.local_government_area.map((error, index) => <p key={index} className="error">{error}</p>)}
      </div>

      <div>
        <label>Nationality</label>
        <input
          type="text"
          name="nationality"
          value={formData.nationality}
          onChange={handleInputChange}
          required
        />
        {errors.nationality && errors.nationality.map((error, index) => <p key={index} className="error">{error}</p>)}
      </div>

      <div>
        <label>Parent</label>
        <select name="parent" value={formData.parent} onChange={handleInputChange} required>
          <option value="" disabled>Select Parent</option>
          {parentsData.map((parent) => (
            <option key={parent.id} value={parent.id}>
              {parent.code} - {parent.email}
            </option>
          ))}
        </select>
        {errors.parent && errors.parent.map((error, index) => <p key={index} className="error">{error}</p>)}
      </div>

      <div>
        <label>Religion</label>
        <input
          type="text"
          name="religion"
          value={formData.religion}
          onChange={handleInputChange}
          required
        />
        {errors.religion && errors.religion.map((error, index) => <p key={index} className="error">{error}</p>)}
      </div>

      <div>
        <label>Profile Image</label>
        <input
          type="file"
          name="profile_image"
          onChange={handleFileChange}
        />
        {errors.profile_image && errors.profile_image.map((error, index) => <p key={index} className="error">{error}</p>)}
      </div>

      <button type="submit">Submit</button>
      {errors.global && <p className="error">{errors.global}</p>}
    </form>
    
    </div>
  );
};

export default CreateStudent;


