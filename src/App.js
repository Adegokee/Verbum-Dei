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
import StudentId from './components/StudentId';


function App() {
  const [mydata, setMydata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sore-ebba-emekadefirst-e04c4e7b.koyeb.app/student/students/');
        const data = await response.json();
        console.log(data)
        
        if (Array.isArray(data)) {
          setMydata(data);
          console.log(mydata)
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

    const url = "https://weekly-tamqrah-emekadefirst-39635d1c.koyeb.app/class/classes/"

    const response = await fetch(url,{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newReview),
    })
    const data = await response.json()
    setMydata([data, ...mydata])

   }
   
   const editReview = async (id, updatedReview) => {
    const url = `https://weekly-tamqrah-emekadefirst-39635d1c.koyeb.app/class/classes/${id}/`;
    const response = await fetch(url, {
      method: 'PUT',  
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedReview),
    });
    const data = await response.json();
    setMydata(mydata.map(item => (item.id === id ? data : item)));
  };


  const deleteReview = async(id) => {
    if(window.confirm('Are you sure you want to delete this?')){
      await fetch(`http://localhost:8000/api/v1/delete/${id}`,{
          method: 'DELETE',
      })
      setMydata(mydata.filter((item)=> item.id !== id))
    }

   }


  return (
    <div className="">
      <Page/>
    
      
      <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/student-management" element={<StudentManagement  mydata={mydata} setMydata={setMydata}/>} />
        <Route path='/student-management/:id' element={< StudentId/>}/>
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
