import React, { useState, useEffect } from 'react';

const ClassAndExam = ({ teacherData }) => {
  const [classes, setClasses] = useState([]);
  const [name, setNewClassName] = useState('');
  const [teacher, setSelectedTeacherId] = useState('');

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await fetch('https://verbumdei-management-system-vms.onrender.com/class/classes/');
      const data = await response.json();
      setClasses(data);
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  const handleAddClass = async (e) => {
    e.preventDefault();
    const newClass = {
      name: name,
      teacher: teacher, 
    };

    try {
      const response = await fetch('https://verbumdei-management-system-vms.onrender.com/class/classes/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newClass),
      });

      if (response.ok) {
        alert('Class added successfully!');
        setNewClassName('');
        setSelectedTeacherId('');
        fetchClasses(); 
      } else {
        const errorData = await response.json();
        alert('Failed to add class: ' + JSON.stringify(errorData));
      }
    } catch (error) {
      console.error('Error adding class:', error);
    }
  };

  return (
    <div className="container">
      <h1>Class Management</h1>
      <form onSubmit={handleAddClass}>
        <div>
          <label>Class Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setNewClassName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Select Teacher:</label>
          <select
            value={teacher}
            onChange={(e) => setSelectedTeacherId(e.target.value)}
            required
          >
            <option value="">Select a teacher</option>
            {teacherData.map((x) => (
              <option key={x.id} value={x.id}>
                {x.first_name} {x.last_name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Add Class</button>
      </form>

      <h2>Classes</h2>
      <ul>
        {classes.map((classItem) => (
          <li key={classItem.id}>
            {classItem.name} - {classItem.teacher.first_name} {classItem.teacher.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassAndExam;
