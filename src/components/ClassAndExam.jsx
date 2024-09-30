import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const ClassAndExam = ({ teacherData }) => {
  const [classes, setClasses] = useState([]);
  const [name, setNewClassName] = useState('');
  const [teacher, setSelectedTeacherId] = useState('');

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await fetch('https://service.verbumdeiportal.com/class/classes/');
      const data = await response.json();
      setClasses(data);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error fetching classes: ' + error.message,
      });
    }
  };

  const handleAddClass = async (e) => {
    e.preventDefault();
    const newClass = {
      name: name,
      teacher: teacher, 
    };

    try {
      const response = await fetch('https://service.verbumdeiportal.com/class/classes/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newClass),
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Class added successfully!',
        });
        setNewClassName('');
        setSelectedTeacherId('');
        fetchClasses(); 
      } else {
        const errorData = await response.json();
        Swal.fire({
          icon: 'error',
          title: 'Failed',
          text: 'Failed to add class: ' + JSON.stringify(errorData),
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error adding class: ' + error.message,
      });
    }
  };
  return (
    <div className="dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-6 rounded-lg shadow-lg">
    <h1 className="mb-6 text-2xl font-bold text-gray-800">Class Management</h1>
    <form onSubmit={handleAddClass} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Class Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setNewClassName(e.target.value)}
          required
          className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Select Teacher:</label>
        <select
          value={teacher}
          onChange={(e) => setSelectedTeacherId(e.target.value)}
          required
          className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select a teacher</option>
          {teacherData.map((x) => (
            <option key={x.id} value={x.id}>
              {x.first_name} {x.last_name}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="w-[200px] ml-[400px] px-4 py-2 text-white transition duration-200 bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Add Class
      </button>
    </form>
  
    <h2 className="mt-6 text-xl font-semibold text-gray-800">Classes</h2>
    <ul className="mt-4 space-y-2">
      {classes.map((classItem) => (
        <li key={classItem.id} className="p-3 transition duration-200 bg-white rounded-md shadow-md hover:bg-gray-100">
          {classItem.name} - {classItem.teacher.first_name} {classItem.teacher.last_name} {classItem.teacher.name}
        </li>
      ))}
    </ul>
  </div>
  
  );
};

export default ClassAndExam;
