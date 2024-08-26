import React, {useState, useEffect} from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import StudentManagement from './components/StudentManagement';
import TeacherManagement from "./components/TeacherManagement";
import FeesAndPayment from './components/FeesAndPayment';
import ClassAndExam from './components/ClassAndExam';
import LibraryAndManagement from './components/LibraryAndManagement';
import InventoryManagement from './components/InventoryManagement';
import EventManagement from './components/EventManagement';
import Page from './page/Page';
import './App.css'
import {Routes, Route} from "react-router-dom";
import CreateStudent from './components/CreateStudent';
import StudentFinishedReg from './components/StudentFinishedReg';
import CreateTeacher from './components/CreateTeacher';
import Home from './components/Home';


function App() {
  const [mydata, setMydata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://weekly-tamqrah-emekadefirst-39635d1c.koyeb.app/class/classes/');
        const data = await response.json();
        
        if (Array.isArray(data)) {
          setMydata(data);
        } else {
          throw new Error('Data is not an array');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addReview = async (newReview) => {
    // const url = 'https://jsonplaceholder.typicode.com/posts'
    const url = "https://weekly-tamqrah-emekadefirst-39635d1c.koyeb.app/class/classes/"

    const response = await fetch(url,{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newReview),
    })
    const data = await response.json()
    setMydata([data, ...mydata])

   }


  return (
    <div className="">
      <Page/>
    
      
      <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/student-management" element={<StudentManagement  mydata={mydata} setMydata={setMydata}/>} />
        <Route path="/teacher-management" element={<TeacherManagement />} />
        <Route path="/fee-and-payment" element={<FeesAndPayment />} />
        <Route path="/class-and-exam" element={<ClassAndExam />} />
        <Route path="/library-and-management" element={<LibraryAndManagement />} />
        <Route path="/inventory-management" element={<InventoryManagement />} />
        <Route path="/event-management" element={<EventManagement />} />
        <Route path="/create-student" element={<CreateStudent addReview={addReview}/>}/>
        <Route path="/create-teacher" element={<CreateTeacher/>}/>
        <Route path="/student-finished-reg" element={<StudentFinishedReg/>}/>



      
      

      </Routes>
     
    </div>
  );
}

export default App;
