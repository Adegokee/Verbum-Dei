import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Page from './page/Page';
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="">
      <Page/>
    
      
      <Routes>
      
      {/* <Route path='/' element={<Page/>}/> */}
        <Route path="/dashboard/dashboard" element={<Dashboard />} />
        {/* <Route path="/dashboard/student_management" element={<StudentManagement />} />
        <Route path="/dashboard/teacher_management" element={<TeacherManagement />} />
        <Route path="/dashboard/fee_and_payment" element={<FeesAndPayment />} />
        <Route path="/dashboard/class_and_exam" element={<ClassAndExam />} />
        <Route path="/dashboard/library_and_management" element={<LibraryAndManagement />} />
        <Route path="/dashboard/inventory_management" element={<InventoryManagement />} />
        <Route path="/dashboard/event_management" element={<EventManagement />} />
       */}
      

      </Routes>
     
    </div>
  );
}

export default App;
