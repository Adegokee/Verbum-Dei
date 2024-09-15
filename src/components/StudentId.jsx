import React, { useState, useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import mywindow from '../assest/myIcon.png';
import Icon from '../assest/icon.png';
import cal from '../assest/calendar_today1.png';
import profileavatar from '../assest/profile-avatar.png';

const StudentId = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [staff, setStaff] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://verbumdei-management-system-vms.onrender.com/student/student/${id}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setStaff(data); 
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);  
        setLoading(false);
      });
  }, [id]);

  const handleEdit = () => {
    navigate(`/student/${id}`);
  };

  if (loading) return <p className=' absolute bg-[#f5f9fc] top-[75px] left-[50%] p-[10px] '>Loading..</p>;  
  if (error) return <p className=' absolute bg-[#f5f9fc] top-[75px] left-[50%] p-[10px] '>Error: {error}</p>;  

  return (
    <div className='dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px] '>
      <h1 className='font-bold text-[22px] text-[#0f83ff] mb-[40px]'>Student Details</h1>
      {staff ? (
        <div>
          <main className='flex items-center justify-between'>
            <div className='w-[100px] h-[100px] rounded-[50%] border-2 border-[#0f83ff]'>
              <img src={staff.img_url ? staff.img_url : profileavatar} className='w-full h-full rounded-[50%]' alt="" />
            </div>
            <div>
              <span className='bg-[#0f83ff] text-white px-[25px] py-[8px] rounded-l-md'>Profile</span>
              <span className='bg-[#b0bec5] text-white px-[25px] py-[8px] rounded-r-md'>Class</span>
            </div>
          </main>
          <p>{staff.staff_id}</p>
          <main className='flex items-center justify-between'>
            <div>
              <p className='text-[20px] font-semibold '>{staff.first_name} {staff.last_name} <span className='ml-[15px] text-[10px] bg-[#00b69b] text-white rounded-full font-thin p-[5px]'>Student</span></p>
              <p className='font-semibold text-[#beb8c8]'>{staff.position} Student</p>
            </div>
            <div className='bg-[#0f83ff] flex items-center justify-center p-[10px] w-[100px] h-[30px] rounded-md'>
              <span className='bg-[#0f83ff] text-white p-[5px] rounded-full'><img src={mywindow} alt="" /></span>
              <button onClick={handleEdit} className='text-white'>Edit</button>
            </div>
          </main>
          {/* Add more staff details as needed */}
        </div>
      ) : (
        <p className='dashboard absolute bg-[#f5f9fc] top-[75px] left-[50%] p-[10px] '>No student data available</p>
      )}
    </div>
  );
}

export default StudentId;
