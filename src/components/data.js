import { RxDashboard } from "react-icons/rx";
import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SiContactlesspayment } from "react-icons/si";
import { TiChartBar } from "react-icons/ti";
import { IoLibrarySharp } from "react-icons/io5";
import { TiVendorMicrosoft } from "react-icons/ti";
import { BsCalendarEventFill } from "react-icons/bs";
export let dashBoardIcon = [
{
    icon: <RxDashboard />,
    name: 'Dashboard',
    route:'dashboard'
},
{
    icon: <PiStudentFill />,
    name: 'Student Management',
    route:'student_management'
},
{
    icon: <FaChalkboardTeacher />,
    name: 'Teacher Management',
    route: 'teacher_management'
},
{
    icon: <SiContactlesspayment/>,
    name: 'Fees and Payment',
    route: 'fee_and_payment'
},
{
    icon: <TiChartBar/>,
    name: 'Class and Exam',
    'route': 'class_and_exam'
    
},
{
    icon: <IoLibrarySharp/>,
    name: 'Library and Management',
    route: 'library_and_management'
}, 

{
    icon: <TiVendorMicrosoft/>,
    name: 'Iventory Management',
    route: 'inventory_management'
},
{
    icon: <BsCalendarEventFill/>,
    name: 'Event Management',
    route:'event_management'
},




]