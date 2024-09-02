import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const StudentId = () => {
  const { id } = useParams();  // Get the teacher ID from the URL
  const [staff, setStaff] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch staff data using the id from the URL
    fetch(`https://verbumdei-management-system-vms.onrender.com/student/student/${id}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setStaff(data);  // Set the staff data to state
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);  // Handle any errors
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;  // Display loading message while fetching data
  if (error) return <p>Error: {error}</p>;  // Display error message if there's an error

  return (
    <div className='dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px]'>
      <h1>Staff Detail</h1>
      {staff ? (
        <div>
          <p>ID: {staff.id}</p>
          <p>Name: {staff.first_name} {staff.last_name}</p>
          <p>Email: {staff.email}</p>
          {/* Add more staff details as needed */}
        </div>
      ) : (
        <p>No staff data available</p>  // Fallback if no data is available
      )}
    </div>
  );
}

export default StudentId;