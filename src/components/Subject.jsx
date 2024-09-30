import React, { useState, useEffect } from 'react';
import { SiX } from 'react-icons/si';
import Swal from 'sweetalert2';

const Subject = ({ teacherData }) => {
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [teacher, setTeacher] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([fetchTeachers(), fetchClasses(), fetchSubjects()]);
    };
    fetchData();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await fetch('https://service.verbumdeiportal.com/staff/staff/');
      const data = await response.json();
      setTeachers(data);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error fetching teachers: ' + error.message,
      });
    }
  };

  const fetchClasses = async () => {
    try {
      const response = await fetch('https://service.verbumdeiportal.com/class/classes/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
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

  const fetchSubjects = async () => {
    try {
      const response = await fetch('https://service.verbumdeiportal.com/class/subjects/');
      const data = await response.json();
      setSubjects(data);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error fetching subjects: ' + error.message,
      });
    }
  };

  const handleAddSubject = async (e) => {
    e.preventDefault();
    const newSubject = { name, grade, teacher };

    try {
      const response = await fetch('https://service.verbumdeiportal.com/class/subjects/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSubject),
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Subject added successfully!',
        });
        resetForm();
        await fetchSubjects();
      } else {
        const errorData = await response.json();
        Swal.fire({
          icon: 'error',
          title: 'Failed',
          text: 'Failed to add subject because teacher has already been assigned',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error adding subject:',
      });
    }
  };
  const resetForm = () => {
    setName('');
    setGrade('');
    setTeacher('');
  };

  const renderSubjects = () => {
    if (subjects.length === 0) {
      return <li className="p-2 bg-white rounded-md shadow">No subjects available.</li>;
    }
  
    return subjects.map((subject) => {
      // Ensure subject.teacher is a valid ID or string
      const teacherInfo = teacherData.find((teacher) => teacher.id === subject.teacher) || {};
      const first_name = teacherInfo.first_name || 'N/A';
      const last_name = teacherInfo.last_name || '';
  
      return (
       <div>
        {teacherData.map((x) => {
           <li key={subject.id} className="p-2 bg-white rounded-md shadow">
           {typeof subject.name === 'string' ? subject.name : 'N/A'} - 
           Grade ID: {typeof subject.grade === 'string' || typeof subject.grade === 'number' ? subject.grade : 'N/A'} - 
           Teacher: {x.first_name} {x.last_name}
         </li>
        })}
       </div>
      );
    });
  };
  

  return (
    <div className="dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-6 rounded-lg shadow-lg">
      <h1 className="mb-4 text-2xl font-semibold">Subject Management</h1>
      <form onSubmit={handleAddSubject} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Subject Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Grade:</label>
          <select
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
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
          <label className="block text-sm font-medium text-gray-700">Select Teacher:</label>
          <select
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            required
            className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a teacher</option>
            {teachers.map((teacherItem) => (
              <option key={teacherItem.id} value={teacherItem.id}>
                {teacherItem.first_name} {teacherItem.last_name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-[200px] px-auto ml-[400px] py-2 text-white transition duration-200 bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Add Subject
        </button>
      </form>

      <h2 className="mt-6 text-xl font-semibold">Subjects</h2>
      {subjects.map((x) => (
        <div key={x.id}>
          
          <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="py-3 px-4 text-left">Subject Name</th>
            <th className="py-3 px-4 text-left">Teacher Name</th>
            <th className="py-3 px-4 text-left">Class Assigned</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((x) => (
            <tr key={x.id} className="hover:bg-gray-100">
              <td className="py-3 px-4 border border-gray-300">
                <span>{x.name}</span>
              </td>
              <td className="py-3 px-4 border border-gray-300">
                <span>{x.teacher.first_name} {x.teacher.last_name}</span>
              </td>
              <td className="py-3 px-4 border border-gray-300">
                <span>{x.grade.name}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </div>
      )).slice(0, 1)}
      

      <ul className="mt-4 space-y-2">
        {renderSubjects()}
      </ul>
    </div>
  );
};

export default Subject;

// import React, { useState, useEffect } from 'react';

// const Subject = () => {
//   const [teachers, setTeachers] = useState([]);
//   const [classes, setClasses] = useState([]);
//   const [subjects, setSubjects] = useState([]);
//   const [name, setName] = useState('');
//   const [grade, setGrade] = useState('');
//   const [teacher, setTeacher] = useState('');
//   const [errorMessages, setErrorMessages] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       await Promise.all([fetchTeachers(), fetchClasses(), fetchSubjects()]);
//     };
//     fetchData();
//   }, []);

//   const fetchTeachers = async () => {
//     try {
//       const response = await fetch('https://verbumdei-management-system-vms.onrender.com/staff/staff/');
//       const data = await response.json();
//       setTeachers(data);
//     } catch (error) {
//       console.error('Error fetching teachers:', error);
//     }
//   };

//   const fetchClasses = async () => {
//     try {
//       const response = await fetch('https://verbumdei-management-system-vms.onrender.com/class/classes/');
//       const data = await response.json();
//       setClasses(data);
//     } catch (error) {
//       console.error('Error fetching classes:', error);
//     }
//   };

//   const fetchSubjects = async () => {
//     try {
//       const response = await fetch('https://verbumdei-management-system-vms.onrender.com/class/subjects/');
//       const data = await response.json();
//       setSubjects(data);
//     } catch (error) {
//       console.error('Error fetching subjects:', error);
//     }
//   };

//   const handleAddSubject = async (e) => {
//     e.preventDefault();
//     const newSubject = { name, grade, teacher };

//     try {
//       const response = await fetch('https://verbumdei-management-system-vms.onrender.com/class/subjects/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newSubject),
//       });

//       if (response.ok) {
//         alert('Subject added successfully!');
//         resetForm();
//         await fetchSubjects(); 
//       } else {
//         const errorData = await response.json();
//         setErrorMessages(errorData); 
//         console.error('Failed to add subject:', errorData);
//       }
//     } catch (error) {
//       console.error('Error adding subject:', error);
//     }
//   };

//   const resetForm = () => {
//     setName('');
//     setGrade('');
//     setTeacher('');
//     setErrorMessages({});
//   };

//   return (
//     <div className="p-6 rounded-lg shadow-lg dashboard">
//       <h1 className="mb-4 text-2xl font-semibold">Subject Management</h1>
//       <form onSubmit={handleAddSubject} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Subject Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className={`block w-full p-2 mt-1 border ${errorMessages.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//           />
//           {errorMessages.name && <p className="text-red-500">{errorMessages.name[0]}</p>}
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Grade:</label>
//           <select
//             value={grade}
//             onChange={(e) => setGrade(e.target.value)}
//             required
//             className={`block w-full p-2 mt-1 border ${errorMessages.grade ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//           >
//             <option value="">Select a grade</option>
//             {classes.map((classItem) => (
//               <option key={classItem.id} value={classItem.id}>
//                 {classItem.name}
//               </option>
//             ))}
//           </select>
//           {errorMessages.grade && <p className="text-red-500">{errorMessages.grade[0]}</p>}
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Select Teacher:</label>
//           <select
//             value={teacher}
//             onChange={(e) => setTeacher(e.target.value)}
//             required
//             className={`block w-full p-2 mt-1 border ${errorMessages.teacher ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//           >
//             <option value="">Select a teacher</option>
//             {teachers.map((teacherItem) => (
//               <option key={teacherItem.id} value={teacherItem.id}>
//                 {teacherItem.first_name} {teacherItem.last_name}
//               </option>
//             ))}
//           </select>
//           {errorMessages.teacher && <p className="text-red-500">{errorMessages.teacher[0]}</p>}
//         </div>
//         <button
//           type="submit"
//           className="w-full px-4 py-2 text-white transition duration-200 bg-blue-600 rounded-md hover:bg-blue-700"
//         >
//           Add Subject
//         </button>
//       </form>

//       <h2 className="mt-6 text-xl font-semibold">Subjects</h2>
//       <ul className="mt-4 space-y-2">
//         {subjects.length === 0 ? (
//           <li className="p-2 bg-white rounded-md shadow">No subjects available.</li>
//         ) : (
//           subjects.map((subject) => (
//             <li key={subject.id} className="p-2 bg-white rounded-md shadow">
//               {subject.name} - Grade ID: {subject.grade} - Teacher: {subject.teacher ? subject.teacher : 'N/A'}
//             </li>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Subject;

