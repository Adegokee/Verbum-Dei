import React, {useState, useEffect} from 'react';
import './App.css';
import EditTeacher from './components/EditTeacher';
import Dashboard from './components/dashboard/Dashboard';
import StudentManagement from './components/StudentManagement';
import TeacherManagement from "./components/TeacherManagement";
import FeesAndPayment from './components/FeesAndPayment';
import ClassAndExam from './components/ClassAndExam';
import LibraryAndManagement from './components/LibraryAndManagement';
import InventoryManagement from './components/InventoryManagement';
import EventManagement from './components/EventManagement';
import Page from './page/Page';
import Signup from './components/SignUp';
import PasswordReset from './components/PasswordReset';
import './App.css'
import {Routes, Route} from "react-router-dom";
import CreateStudent from './components/CreateStudent';
import StudentFinishedReg from './components/StudentFinishedReg';
import CreateTeacher from './components/CreateTeacher';
import Home from './components/Home';
import StudentId from './components/StudentId';
import TeacherSuccess from './components/TeacherSuccess';
import { myData } from './components/data';
import Parent from './components/Parent';
import CreateParent from './components/CreateParent';
import TeachersProfile from './components/TeachersProfile';
import Navbar from './components/navbar/Navbar';
import Login from './components/Login';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Subject from './components/Subject';
import CreateSubject from './components/CreateSubject';
import EditStudent from './components/EditStudent';
import ParentId from './components/ParentId';
import AdminInfo from './components/AdminInfo';



function App() {
  const [mydata, setMydata] = useState([]);
  const [teacherData, setTeacherData] = useState([]);
  const [parent, setParent] = useState([]);
  const [myclass, setMyClass] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [myerrors, setMyErrors] = useState({});
  const [subject, setSubject] =useState([]);
  // import Dashboard from './Dashboard';
  const [user, setUser] = useState(null);
  const [inventoryType, setInventoryType] = useState();


const PrivateRoute = ({ user, children }) => {
  return user ? children : <Navigate to="/login" />;
};


const handleLogout = async (setUser) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch('https://sore-ebba-emekadefirst-e04c4e7b.koyeb.app/sub-admin/api/auth/logout/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Logout failed');
    }

    setUser(null); // Clear user data
    localStorage.removeItem('token'); // Remove token
    Navigate('/login'); // Redirect to login page
  } catch (error) {
    console.error('Error logging out:', error);
  }
};




  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch('https://verbumdei-management-system-vms.onrender.com/student/students/');
        const data = await response.json();
        setMydata(data);
        // console.log(data)
        // console.log(teacherData)
      } catch (error) {
        console.error('Failed to fetch teacher data:', error);
      }
    };
    fetchStudentData()
    
  }, []);


  useEffect(() => {
      console.log(mydata);
  }, [mydata]);
  const addStudent = async (newReview) => {
    const url = "https://verbumdei-management-system-vms.onrender.com/student/students/";
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error: ${errorText}`);
      }
      const data = await response.json();
      setMydata([data, ...mydata]);
      setErrors({});
    } catch (error) {
      console.error('Error adding student:', error);
      setErrors({ global: 'An error occurred while adding the student.' });
    }
  };

 
  // const addStudent  = async (newReview) => {
  //   const url = "https://verbumdei-management-system-vms.onrender.com/student/students/";

  //   try {
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json'},
  //       body: JSON.stringify(newReview),
  //     });
      
  //     const data = await response.json();
     
  //     if (response.ok) {
     
  //        setMydata([data, ...mydata]);
  //       setErrors({}); 
  //     } else {
       
  //       setErrors(data); 
  //     }
  //   } catch (error) {
  //     console.error('Error adding teacher:', error);
  //     setErrors({ global: 'An error occurred while adding the teacher.' });
  //   }
  // };




  const deleteReview = async(id) => {
    if(window.confirm('Are you sure you want to delete this?')){
      await fetch(`http://localhost:8000/api/v1/delete/${id}`,{
          method: 'DELETE',
      })
      setMydata(mydata.filter((item)=> item.id !== id))
    }

   }




   useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const response = await fetch('https://verbumdei-management-system-vms.onrender.com/staff/staff/');
        const data = await response.json();
        setTeacherData(data);
        // console.log(data)
        // console.log(teacherData)
      } catch (error) {
        console.error('Failed to fetch teacher data:', error);
      }
    };
    fetchTeacherData()
    
  }, []);
  useEffect(() => {
    // console.log(teacherData);
  }, [teacherData]);

   const editTeacher= async (id, updatedReview) => {
    const url = `https://verbumdei-management-system-vms.onrender.com/staff/staff/${id}/`;
    const response = await fetch(url, {
      method: 'PUT',  
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedReview),
    });
    const data = await response.json();
    setTeacherData(teacherData.map(item => (item.id === id ? data : item)));
  };


  const addTeacher = async (newReview) => {
    const url = "https://verbumdei-management-system-vms.onrender.com/staff/staff/";

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview),
      });
      
      const data = await response.json();
      // setTeacherData([data, ...teacherData]);
      if (response.ok) {
     
        setTeacherData([data, ...teacherData]);
        setErrors({}); 
      } else {
       
        setErrors(data); 
      }
    } catch (error) {
      console.error('Error adding teacher:', error);
      setErrors({ global: 'An error occurred while adding the teacher.' });
    }
  };

  // const editTeacher = async (id, updatedData) => {
  //   const url = `https://verbumdei-management-system-vms.onrender.com/staff/staff/${id}/`;
  
  //   try {
  //     const response = await fetch(url, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(updatedData),
  //     });
  
  //     const data = await response.json();
  
  //     if (response.ok) {
  //       // Success - Update the state or notify the user
  //       console.log('Teacher updated successfully:', data);
  //       setTeacherData((prevData) =>
  //         prevData.map((teacher) => (teacher.id === id ? data : teacher))
  //       );
  //       setErrors({});
  //     } else {
  //       // Handle validation errors from the API
  //       setErrors(data);
  //     }
  //   } catch (error) {
  //     console.error('Error updating teacher:', error);
  //     setErrors({ global: 'An error occurred while editing the teacher.' });
  //   }
  // };



  
  // const addTeacher = async (newTeacher) => {
  //   const url = "https://sore-ebba-emekadefirst-e04c4e7b.koyeb.app/staff/staff/";
  
  //   try {
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(newTeacher),
  //     });
  
  //     if (!response.ok) {
  //       throw new Error('Failed to add teacher');
  //     }
  
  //     const data = await response.json();
  //     setTeacherData([data, ...teacherData]);  
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  useEffect(() => {
    const fetchParentData = async () => {
      try {
        const response = await fetch('https://verbumdei-management-system-vms.onrender.com/parent/');
        const data = await response.json();
        setParent(data);
        // console.log(data)
        // console.log(teacherData)
      } catch (error) {
        console.error('Failed to fetch teacher data:', error);
      }
    };
    fetchParentData()
    
  }, []);


  useEffect(() => {
    console.log(parent);
  }, [parent]);

  const addMyParent = async (newReview) => {
    const url = "https://verbumdei-management-system-vms.onrender.com/parent/";
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview),
      });
      
      // Check if the response is OK
      if (!response.ok) {
        // Read response text to debug server errors
        const errorText = await response.text();
        throw new Error(`Server error: ${errorText}`);
      }
  
      // Try to parse JSON response
      const data = await response.json();
      
      // Update state with response data
      setParent([data, ...parent]);
      setMyErrors({});
    } catch (error) {
      console.error('Error adding parent:', error);
      setErrors({ global: 'An error occurred while adding the parent.' });
    }
  };
  

  // const addMyParent = async (newReview) => {
  //   // const url = 'https://jsonplaceholder.typicode.com/posts'
  //   const url = "https://sore-ebba-emekadefirst-e04c4e7b.koyeb.app/parent/"

  //   const response = await fetch(url,{
  //     method:'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify(newReview),
  //   })
  //   const data = await response.json()
  //   setParent([data, ...parent])

  //  }

  useEffect(() => {
    const fetchClassData = async () => {
      try {
        const response = await fetch('https://verbumdei-management-system-vms.onrender.com/class/classes/');
        const data = await response.json();
        setMyClass(data);
        
      } catch (error) {
        console.error('Failed to fetch teacher data:', error);
      }
    };
    fetchClassData()
    
  }, []);


  useEffect(() => {
    console.log(myclass);
  }, [myclass]);

  useEffect(() => {
    const fetchSubject = async () => {
      try {
        const response = await fetch('https://verbumdei-management-system-vms.onrender.com/class/subjects/');
        const data = await response.json();
        setSubject(data);
        
      } catch (error) {
        console.error('Failed to fetch teacher data:', error);
      }
    };
    fetchSubject()
    
  }, []);


  useEffect(() => {
    console.log(subject);
  }, [subject]);

  useEffect(() => {
    const fetchClassData = async () => {
      try {
        const response = await fetch('https://verbumdei-management-system-vms.onrender.com/class/classes/');
        const data = await response.json();
        setMyClass(data);
     
      } catch (error) {
        console.error('Failed to fetch teacher data:', error);
      }
    };
    fetchClassData()
    
  }, []);


  const addSubject = async (newReview) => {
    const url = "https://verbumdei-management-system-vms.onrender.com/class/subjects/";
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview),
      });
      
      if (!response.ok) {
        const errorText = await response.text();
       
        throw new Error(`Server error ${response.status}: ${errorText}`);
      }
  
      const data = await response.json();
      
      
      setSubject(prevSubjects => [data, ...prevSubjects]);
      setMyErrors({}); 
    } catch (error) {
      console.error('Error adding subject:', error.message);  
      setErrors({ global: 'An error occurred while adding the subject.' });  
    }
  };
  useEffect(() => {
    const fetchInventoryType = async () => {
      try {
        const response = await fetch('https://verbumdei-management-system-vms.onrender.com/inventory/all-type/');
        const data = await response.json();
        setInventoryType(data);
        
      } catch (error) {
        console.error('Failed to fetch teacher data:', error);
      }
    };
    fetchInventoryType()
    
  }, []);


  useEffect(() => {
    console.log(inventoryType);
  }, [inventoryType]);




  const addInventoryType = async (newReview) => {
    const url = "https://verbumdei-management-system-vms.onrender.com/inventory/all-type/";
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview),
      });
      
   
      if (!response.ok) {
     
        const errorText = await response.text();
        throw new Error(`Server error: ${errorText}`);
      }
  
     
      const data = await response.json();
      
    
      setInventoryType([data, ...inventoryType]);
      setMyErrors({});
    } catch (error) {
      console.error('Error adding parent:', error);
      setErrors({ global: 'An error occurred while adding the parent.' });
    }
  };
  return (
    <div className="">
      <Page/>      
      <Routes>
      {/* <Route path="/login" element={<Login/>}/> */}
      <Route path="/admin-info" element={<AdminInfo/>}/>
      <Route path="/dashboard" element={<Dashboard user={user}/>} />
      <Route path="/subject-management" element={<Subject  />}/>
      <Route path="/create-subject" element={<CreateSubject teacherData={teacherData} myclass={myclass} subject={subject} addSubject={addSubject} />}/> 

        <Route path="/" element={<Home/>}/>
        
        <Route path="/teacher-management" element={<TeacherManagement teacherData={teacherData}  setTeacherData={setTeacherData} />} />
        
        {/* <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
          } /> */}
           {/* <Route path="/signup" element={<Signup />} /> */}
           <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="/create_parent" element={<CreateParent addMyParent={addMyParent} myerrors={myerrors}/>}/>
        <Route path="/parent" element={<Parent parent={parent} errors={errors} />} />
        <Route path="/parent:id" element={<ParentId parent={parent} errors={errors} />} />

        <Route path="/student-management" element={<StudentManagement  mydata={mydata} setMydata={setMydata}/>} />
        <Route path='/student-management/:id' element={< StudentId/>}/>
        {/* <Route path="/teacher-management" element={<TeacherManagement teacherData={teacherData}  setTeacherData={setTeacherData} />} /> */}
        <Route path="/fee-and-payment" element={<FeesAndPayment />} />
        <Route path="/class-and-exam" element={<ClassAndExam teacherData={teacherData} />} />
        <Route path="/library-and-management" element={<LibraryAndManagement />} />
        <Route path="/inventory-management" element={<InventoryManagement inventoryType={inventoryType} />} />
        <Route path="/event-management" element={<EventManagement />} />
        <Route path="/create-student" element={<CreateStudent addStudent={addStudent} myclass={myclass} mydata={mydata} errors={errors} myparent={parent} teacherData={teacherData}/>}/>
        <Route path="/create-teacher" element={<CreateTeacher addTeacher={addTeacher } editTeacher={editTeacher} errors={errors} teacherData={teacherData} setTeacherData={setTeacherData}/>}/>
        <Route path="/teacher-management/:id" element={<TeachersProfile updateTeacher={editTeacher}  />} />
        <Route path="/teacher/:id" element={<EditTeacher />} />
        <Route path="/student/:id" element={<EditStudent />} />
        <Route path="/student-finished-reg" element={<StudentFinishedReg/>}/>
        <Route path="/teacher-finished-reg" element={<TeacherSuccess />} />

      </Routes>
     
    </div>
  );
}

export default App;