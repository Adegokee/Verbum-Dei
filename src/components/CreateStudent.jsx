import React,{useState, useEffect} from 'react';

const StudentCreate = () => {
    // const [students, setStudents] = useState([]);

    // useEffect(() => {
    //     const fetchStudents = async () => {
    //         try {
    //             const response = await fetch('https://verbumdei-management-system-vms.onrender.com/student/students/');
    //             const data = await response.json();
    //             setStudents(data);
    //         } catch (error) {
    //             console.error('Error fetching student data:', error);
    //         } 
    //     };

    //     fetchStudents();
    // }, []);

    // return (
    //     <div className="container mt-5">
    //         <h1 className="text-center mb-4">Student List</h1>
    //         <div className="table-responsive">
    //             <table className="table table-bordered table-hover">
    //                 <thead className="thead-dark">
    //                     <tr>
    //                         <th>Registration ID</th>
    //                         <th>Name</th>
    //                         <th>Date of Birth</th>
    //                         <th>Gender</th>
    //                         <th>Type</th>
    //                         <th>Home Address</th>
    //                         <th>Nationality</th>
    //                         <th>Parent</th>
    //                         <th>Religion</th>
    //                         <th>Class Assigned</th>
    //                         <th>Profile Image</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {students.map(student => (
    //                         <tr key={student.registration_id}>
    //                             <td>{student.registration_id}</td>
    //                             <td>{`${student.first_name} ${student.other_name} ${student.last_name}`}</td>
    //                             <td>{student.date_of_birth}</td>
    //                             <td>{student.gender}</td>
    //                             <td>{student.type}</td>
    //                             <td>{student.home_address}</td>
    //                             <td>{student.nationality}</td>
    //                             <td>{student.parent}</td>
    //                             <td>{student.religion}</td>
    //                             <td>{student.class_assigned}</td>
    //                             <td>
    //                                 <img 
    //                                     src={student.img_url} 
    //                                     alt="Profile" 
    //                                     className="img-fluid rounded" 
    //                                     style={{ maxWidth: '100px' }} 
    //                                 />
    //                             </td>
    //                         </tr>
    //                     ))}
    //                 </tbody>
    //             </table>
    //         </div>
    //     </div>
    // );

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
        <div className="dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px]">
          
            <form id="student-form" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="row">
                    {[
                        { id: 'first_name', label: 'First Name', type: 'text' },
                        { id: 'other_name', label: 'Other Name', type: 'text' },
                        { id: 'last_name', label: 'Last Name', type: 'text' },
                        { id: 'date_of_birth', label: 'Date of Birth', type: 'date' },
                        { id: 'gender', label: 'Gender', type: 'select', options: ['MALE', 'FEMALE'] },
                        { id: 'type', label: 'Type', type: 'select', options: ['BOARDER', 'DAY'] },
                        { id: 'home_address', label: 'Home Address', type: 'text' },
                        { id: 'state_of_origin', label: 'State of Origin', type: 'text' },
                        { id: 'local_government_area', label: 'Local Government Area', type: 'text' },
                        { id: 'nationality', label: 'Nationality', type: 'text' },
                        { id: 'parent', label: 'Parent', type: 'text' },
                        { id: 'religion', label: 'Religion', type: 'text' },
                        { id: 'class_assigned', label: 'Class Assigned', type: 'text' },
                        { id: 'upload', label: 'Upload Profile Image', type: 'file' }
                    ].map(({ id, label, type, options }) => (
                        <div className="col-md-4 mb-3" key={id}>
                            <label htmlFor={id} className="form-label">{label}</label>
                            {type === 'select' ? (
                                <select className="form-control" id={id} name={id} required>
                                    {options.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            ) : (
                                <input 
                                    type={type} 
                                    className="bg-gray-50 border form-control border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5" 
                                    id={id} 
                                    name={id} 
                                    accept={type === 'file' ? 'image/*' : undefined}
                                    required
                                />
                            )}
                        </div>
                    ))}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default StudentCreate;
