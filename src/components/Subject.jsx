import React, { useState, useEffect } from 'react';

const Subject = () => {
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [teacher, setTeacher] = useState('');

  useEffect(() => {
    fetchTeachers();
    fetchClasses();
    fetchSubjects();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await fetch('https://verbumdei-management-system-vms.onrender.com/staff/staff/');
      const data = await response.json();
      setTeachers(data);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  const fetchClasses = async () => {
    try {
      const response = await fetch('https://verbumdei-management-system-vms.onrender.com/class/classes/');
      const data = await response.json();
      setClasses(data);
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  const fetchSubjects = async () => {
    try {
      const response = await fetch('https://verbumdei-management-system-vms.onrender.com/class/subjects/');
      const data = await response.json();
      setSubjects(data);
    } catch (error) {
      console.error('Error fetching subjects:', error);
    }
  };

  const handleAddSubject = async (e) => {
    e.preventDefault();
    const newSubject = {
      name: name,
      grade: grade,
      teacher: teacher,
    };

    try {
      const response = await fetch('https://verbumdei-management-system-vms.onrender.com/class/subjects/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSubject),
      });

      if (response.ok) {
        alert('Subject added successfully!');
        setName('');
        setGrade('');
        setTeacher('');
        fetchSubjects();
      } else {
        const errorData = await response.json();
        alert('Failed to add subject: ' + JSON.stringify(errorData));
      }
    } catch (error) {
      console.error('Error adding subject:', error);
    }
  };

  return (
    <div className="dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px] ">
      <h1>Subject Management</h1>
      <form onSubmit={handleAddSubject}>
        <div>
          <label>Subject Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Grade:</label>
          <select
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          >
            <option value="">Select a grade</option>
            {classes.map((classItem) => (
              <option key={classItem.id} value={classItem.id}>
                {classItem.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Select Teacher:</label>
          <select
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            required
          >
            <option value="">Select a teacher</option>
            {teachers.map((teacherItem) => (
              <option key={teacherItem.id} value={teacherItem.id}>
                {teacherItem.first_name} {teacherItem.last_name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Add Subject</button>
      </form>

      <h2>Subjects</h2>
      <ul>
        {subjects.map((subject) => (
          <li key={subject.id}>
            {subject.name} - Grade ID: {subject.grade} - Teacher ID: {subject.teacher}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subject;