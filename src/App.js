import React, {useState, useEffect, createContext, useContext} from 'react';
import AuthRoute from './components/AuthRoute';
import PrivateRoute from './components/PrivateRoute';
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
import Swal from 'sweetalert2';
import Signup from './components/SignUp';
import PasswordReset from './components/PasswordReset';
import './App.css'
import {Routes, Route} from "react-router-dom";
import CreateStudent from './components/CreateStudent';
import StudentFinishedReg from './components/StudentFinishedReg';
import CreateTeacher from './components/CreateTeacher';
import Home, { UserProvider } from './components/Home';
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



const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  // other states and login/logout logic...

  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};



function App() {
  const navigate = useNavigate();
 

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
  const [admin_id, setAdminId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [staff_id, setStaffId] = useState('');
    const [userInfo, setUserInfo] = useState(null);
    const [isSigningUp, setIsSigningUp] = useState(false);

    const isAdmin = userInfo && userInfo.role === 'admin';
   

   

   

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('https://verbumdei-management-system-vms.onrender.com/subadmin/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ admin_id, password }),
            });
            
            const data = await response.json();
    
            if (data.token) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login successful!',
                    text: 'Welcome back!',
                });
                
                window.localStorage.setItem('token', data.token);
                window.localStorage.setItem('userInfo', JSON.stringify(data.user)); 
                setUserInfo(data.user);
                navigate('/dashboard');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: `Error: ${JSON.stringify(data)}`,
                });
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'An error occurred',
                text: 'Please try again later.',
            });
        }
    };
    
  

const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Passwords do not match',
            text: 'Please try again.',
        });
        return;
    }

    try {
        const response = await fetch('https://verbumdei-management-system-vms.onrender.com/subadmin/signup/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ staff_id, password }),
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                icon: 'success',
                title: 'Sign Up successful!',
                text: 'You can now log in.',
            });
            setIsSigningUp(false);
            navigate('/'); 
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: `Error: ${JSON.stringify(data)}`,
            });
        }
    } catch (error) {
        console.error('Error:', error);
        Swal.fire({
            icon: 'error',
            title: 'An error occurred',
            text: 'Please try again later.',
        });
    }
};

  
  
    const handleLogout = () => {
      try {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('userInfo'); // Remove user info on logout
        setUserInfo(null);
        alert('Thank you! Logout successful.');
        navigate('/'); 
      } catch (error) {
        console.error('Error during logout:', error);
        alert('An error occurred while logging out.');
      }
    };
    
   





  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch('https://verbumdei-management-system-vms.onrender.com/student/students/');
        const data = await response.json();
        setMydata(data);
     
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





  



   useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const response = await fetch('https://verbumdei-management-system-vms.onrender.com/staff/staff/');
        const data = await response.json();
        setTeacherData(data);
       
      } catch (error) {
        console.error('Failed to fetch teacher data:', error);
      }
    };
    fetchTeacherData()
    
  }, []);
  useEffect(() => {
   
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


  useEffect(() => {
    const fetchParentData = async () => {
      try {
        const response = await fetch('https://verbumdei-management-system-vms.onrender.com/parent/');
        const data = await response.json();
        setParent(data);
      
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
      
  
      if (!response.ok) {
        
        const errorText = await response.text();
        throw new Error(`Server error: ${errorText}`);
      }
  
   
      const data = await response.json();
      setParent([data, ...parent]);
      setMyErrors({});
    } catch (error) {
      console.error('Error adding parent:', error);
      setErrors({ global: 'An error occurred while adding the parent.' });
    }
  };
  

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

      <Page userInfo={userInfo} setUserInfo={userInfo} handleLogout={handleLogout}/>   
     
      <Routes>
  <Route path="/" element={
    <Home
      handleLoginSubmit={handleLoginSubmit}
      handleSignUpSubmit={handleSignUpSubmit}
      isSigningUp={isSigningUp}
      setIsSigningUp={setIsSigningUp}
      userInfo={userInfo}
      setUserInfo={setUserInfo}
      staff_id={staff_id}
      setStaffId={setStaffId}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
      password={password}
      setPassword={setPassword}
      admin_id={admin_id}
      setAdminId={setAdminId}
    />
  }/>
   <Route path="/dashboard" element={
    
    <PrivateRoute userInfo={userInfo}>
      <Dashboard userInfo={userInfo}/>
    </PrivateRoute>
    }/>
   



  <Route path="/subject-management" element={
    <PrivateRoute userInfo={userInfo}>
      <Subject teacherData={teacherData} />
    </PrivateRoute>
  }/>

  <Route path="/teacher-management" element={
    <PrivateRoute userInfo={userInfo}>
      <TeacherManagement teacherData={teacherData} setTeacherData={setTeacherData} />
    </PrivateRoute>
  }/>

  <Route path="/password-reset" element={
    <PrivateRoute userInfo={userInfo}>
      <PasswordReset />
    </PrivateRoute>
  }/>

  <Route path="/create_parent" element={
    <PrivateRoute userInfo={userInfo}>
      <CreateParent addMyParent={addMyParent} myerrors={myerrors} />
    </PrivateRoute>
  }/>

  <Route path="/parent" element={
    <PrivateRoute userInfo={userInfo}>
      <Parent parent={parent} errors={errors} />
    </PrivateRoute>
  }/>

  <Route path="/parent:id" element={
    <PrivateRoute userInfo={userInfo}>
      <ParentId parent={parent} errors={errors} />
    </PrivateRoute>
  }/>

  <Route path="/student-management" element={
    <PrivateRoute userInfo={userInfo}>
      <StudentManagement mydata={mydata} setMydata={setMydata} />
    </PrivateRoute>
  }/>

  <Route path='/student-management/:id' element={
    <PrivateRoute userInfo={userInfo}>
      <StudentId />
    </PrivateRoute>
  }/>

  <Route path="/fee-and-payment" element={
    <PrivateRoute userInfo={userInfo}>
      <FeesAndPayment />
    </PrivateRoute>
  }/>

  <Route path="/class-and-exam" element={
    <PrivateRoute userInfo={userInfo}>
      <ClassAndExam teacherData={teacherData} />
    </PrivateRoute>
  }/>

  <Route path="/library-and-management" element={
    <PrivateRoute userInfo={userInfo}>
      <LibraryAndManagement />
    </PrivateRoute>
  }/>

  <Route path="/inventory-management" element={
    <PrivateRoute userInfo={userInfo}>
      <InventoryManagement inventoryType={inventoryType} />
    </PrivateRoute>
  }/>

  <Route path="/event-management" element={
    <PrivateRoute userInfo={userInfo}>
      <EventManagement />
    </PrivateRoute>
  }/>

  <Route path="/create-student" element={
    <PrivateRoute userInfo={userInfo}>
      <CreateStudent addStudent={addStudent} myclass={myclass} mydata={mydata} errors={errors} myparent={parent} teacherData={teacherData} />
    </PrivateRoute>
  }/>

  <Route path="/create-teacher" element={
    <PrivateRoute userInfo={userInfo}>
      <CreateTeacher addTeacher={addTeacher} myparent={parent} myclass={myclass} editTeacher={editTeacher} errors={errors} teacherData={teacherData} setTeacherData={setTeacherData} />
    </PrivateRoute>
  }/>

  <Route path="/teacher-management/:id" element={
    <PrivateRoute userInfo={userInfo}>
      <TeachersProfile updateTeacher={editTeacher} />
    </PrivateRoute>
  }/>

  <Route path="/teacher/:id" element={
    <PrivateRoute userInfo={userInfo}>
      <EditTeacher />
    </PrivateRoute>
  }/>

  <Route path="/student/:id" element={
    <PrivateRoute userInfo={userInfo}>
      <EditStudent />
    </PrivateRoute>
  }/>

  <Route path="/student-finished-reg" element={
    <PrivateRoute userInfo={userInfo}>
      <StudentFinishedReg />
    </PrivateRoute>
  }/>

  <Route path="/teacher-finished-reg" element={
    <PrivateRoute userInfo={userInfo}>
      <TeacherSuccess />
    </PrivateRoute>
  }/>
</Routes>

     
    </div>
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { Routes, Route, Navigate } from "react-router-dom";
// import Home from './components/Home';
// import Login from './components/Login';
// import Dashboard from './components/dashboard/Dashboard';
// import TeacherManagement from "./components/TeacherManagement";
// import StudentManagement from './components/StudentManagement';
// import FeesAndPayment from './components/FeesAndPayment';
// import ClassAndExam from './components/ClassAndExam';
// import LibraryAndManagement from './components/LibraryAndManagement';
// import InventoryManagement from './components/InventoryManagement';
// import EventManagement from './components/EventManagement';
// import Signup from './components/SignUp';
// import PasswordReset from './components/PasswordReset';
// // Import other components...

// function App() {
//   const [user, setUser] = useState(null); // User state to track login status

//   // Sample function to simulate user login/logout
//   const login = () => setUser({ name: "User" }); // Mock login
//   const logout = () => setUser(null); // Mock logout

//   // Private Route Component
//   const PrivateRoute = ({ children }) => {
//     return user ? children : <Navigate to="/" />;
//   };

//   return (
//     <div className="">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login login={login} />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/password-reset" element={<PasswordReset />} />

//         {/* Protected Routes */}
//         <Route path="/dashboard" element={
//           <PrivateRoute>
//             <Dashboard user={user} />
//           </PrivateRoute>
//         } />
//         <Route path="/teacher-management" element={
//           <PrivateRoute>
//             <TeacherManagement />
//           </PrivateRoute>
//         } />
//         <Route path="/student-management" element={
//           <PrivateRoute>
//             <StudentManagement />
//           </PrivateRoute>
//         } />
//         <Route path="/fees-and-payment" element={
//           <PrivateRoute>
//             <FeesAndPayment />
//           </PrivateRoute>
//         } />
//         <Route path="/class-and-exam" element={
//           <PrivateRoute>
//             <ClassAndExam />
//           </PrivateRoute>
//         } />
//         <Route path="/library-and-management" element={
//           <PrivateRoute>
//             <LibraryAndManagement />
//           </PrivateRoute>
//         } />
//         <Route path="/inventory-management" element={
//           <PrivateRoute>
//             <InventoryManagement />
//           </PrivateRoute>
//         } />
//         <Route path="/event-management" element={
//           <PrivateRoute>
//             <EventManagement />
//           </PrivateRoute>
//         } />
//       </Routes>
//     </div>
//   );
// }

// export default App;
