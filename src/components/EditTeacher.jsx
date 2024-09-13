// src/components/EditTeacher.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditTeacher = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [teacher, setTeacher] = useState(null);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number_1: '',
    home_address: '',
    // add more fields as needed
  });

  useEffect(() => {
    // Fetch the teacher's data
    fetch(`https://verbumdei-management-system-vms.onrender.com/staff/staff/${id}/`)
      .then(response => response.json())
      .then(data => {
        setTeacher(data);
        setFormData({
            gender: data.gender,
            first_name: data.first_name,
            last_name: data.last_name,
            other_name: data.other_name,
            phone_number_1: data.phone_number_1,
            phone_number_2: data.phone_number_2,
            email: data.email,
            employment_type: data.employment_type,
            home_address: data.home_address,
            local_government_area: data.local_government_area,
            state_of_origin: data.state_of_origin,
            nin: data.nin,
            bvn: data.bvn,
            staff_type: data.staff_type,
            staff_id: data.staff_id,
            status: data.status,
            position: data.position,
            upload: data.upload,
            img_url: data.img_url
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

    // Update the teacher's data
    fetch(`https://verbumdei-management-system-vms.onrender.com/staff/staff/${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(() => {
        navigate(`/teachers/${id}`);
      });
  };

  return (
    <div className="edit-teacher dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px]">
      <h1>Edit Teacher</h1>
      {teacher ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Gender</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Other Name</label>
            <input
              type="text"
              name="other_name"
              value={formData.other_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Phone Number 1</label>
            <input
              type="text"
              name="phone_number_1"
              value={formData.phone_number_1}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Phone Number 2</label>
            <input
              type="text"
              name="phone_number_2"
              value={formData.phone_number_2}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Employment Type</label>
            <input
              type="text"
              name="employment_type"
              value={formData.employment_type}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Home Address</label>
            <input
              type="text"
              name="home_address"
              value={formData.home_address}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Local Government Area</label>
            <input
              type="text"
              name="local_government_area"
              value={formData.local_government_area}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>State of Origin</label>
            <input
              type="text"
              name="state_of_origin"
              value={formData.state_of_origin}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>NIN</label>
            <input
              type="text"
              name="nin"
              value={formData.nin}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>BVN</label>
            <input
              type="text"
              name="bvn"
              value={formData.bvn}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Staff Type</label>
            <input
              type="text"
              name="staff_type"
              value={formData.staff_type}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Staff ID</label>
            <input
              type="text"
              name="staff_id"
              value={formData.staff_id}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Status</label>
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Upload URL</label>
            <input
              type="text"
              name="upload"
              value={formData.upload}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Image URL</label>
            <input
              type="text"
              name="img_url"
              value={formData.img_url}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );

};

export default EditTeacher;
