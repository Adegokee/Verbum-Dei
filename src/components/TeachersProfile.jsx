import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import mywindow from '../assest/myIcon.png'
import Icon from '../assest/icon.png';
import cal from '../assest/calendar_today1.png'
const TeachersProfile = ({editReview}) => {
  const { id } = useParams();  // Get the teacher ID from the URL
  const [staff, setStaff] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch staff data using the id from the URL
    fetch(`https://verbumdei-management-system-vms.onrender.com/staff/staff/${id}/`)
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

  if (loading) return <p>Loading...</p>;  
  if (error) return <p>Error: {error}</p>;  

  return (
    <div className='dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px] '>
      <h1 className='font-bold text-[22px] text-[#0f83ff] mb-[40px]'>Staff Detail</h1>
      {staff ? (
        <div>
         
         <main className='flex items-center justify-between'>
         <div className='w-[100px] h-[100px] rounded-[50%] border-2 border-[#0f83ff]  '>
         <img src={staff.profile_img} className='w-full h-full rounded-[50%]' alt="" />
         </div>

         <div>
          <span className='bg-[#0f83ff] text-white px-[25px] py-[8px] rounded-l-md'>Profile</span>
          <span className='bg-[#b0bec5] text-white px-[25px] py-[8px] rounded-r-md'>Class</span>
         </div>
         </main>
          <p>{staff.staff_id}</p>
          
          <main className='flex items-center justify-between'>
                <div>
                <p className='text-[20px] font-semibold '>{staff.first_name} {staff.last_name} <span className='ml-[15px] text-[10px] bg-[#00b69b] text-white rounded-full font-thin p-[5px]'>{staff.status}</span></p>
                <p className='font-semibold text-[#beb8c8]'>{staff.position} Teacher</p>
                </div>

                <div className='bg-[#0f83ff] flex items-center justify-center p-[10px] w-[100px] h-[30px] rounded-md'>
                  <span className='bg-[#0f83ff] text-white p-[5px] rounded-full'><img src={mywindow} alt="" /></span>
                  <button onClick={() => editReview(staff.id)} className='text-white '>Edit</button>
                </div>
          </main>
         
         
       <div className='flex justify-between mt-[30px]'>
          <main>
            <small>Gender</small>
              <nav className='flex items-center '>
                <img src={Icon} className='w-[30px] mr-[10px]' alt="" />
              <p>{staff.gender}</p>
              </nav>
          </main>
          <main>
            <small>Type</small>
              <nav className='flex items-center '>
                <img src={Icon} className='w-[30px] mr-[10px]' alt="" />
                <p>{staff.employment_type}</p>
              </nav>
          </main>
          <main>
            <small>Date of Employment</small>
              <nav className='flex items-center '>
                <div className='bg-[#0f83ff] p-[5px]  rounded-[50%] w-[30px] h-[30px] '>
                <img src={cal} className=' w-[20px]  ' alt="" />
                </div>
                <p>{staff.created_at ? staff.created_at.slice(0, 10) : "No date available"}</p>
              </nav>
          </main>
          <main>
            <small> Expected Year of Graduation</small>
              <nav className='flex items-center '>
                <div className=' bg-[#0f83ff] p-[5px] w-[30px] h-[30px] rounded-[50%]'>
                <img  src={cal} className='w-[20px]  ' alt="" />
                </div>
                <p>{staff.created_at ? staff.created_at.slice(0, 4) : "No date available"}</p>
              </nav>
          </main>
          
         
       
       </div>
       <div className='flex justify-between mt-[30px]'>
          <main>
            <small>Address</small>
              <nav className='flex items-center '>
                <img src={Icon} className='w-[30px] mr-[10px]' alt="" />
                <small>{staff.home_address.slice(0, 10)}...</small>
              </nav>
          </main>
          <main>
            <small>Phone:</small>
              <nav className='flex items-center '>
                <img src={Icon} className='w-[30px] mr-[10px]' alt="" />
                <small>{staff.phone_number_1}</small>
              </nav>
          </main>
          <main>
            <small>Email:</small>
              <nav className='flex items-center '>
                <div className='bg-[#0f83ff] p-[5px]  rounded-[50%] w-[30px] h-[30px] '>
                <img src={cal} className=' w-[20px]  ' alt="" />
                </div>
                <p>{staff.email}</p>
              </nav>
          </main>
          <main>
            
                <p className='text-[#0f83ff]'>View All</p>
           
          </main>
       </div>
       
         
           
           
           

          {/* Add more staff details as needed */}
        </div>
      ) : (
        <p>No staff data available</p>  // Fallback if no data is available
      )}
    </div>
  );
}

export default TeachersProfile;