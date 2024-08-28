import React from 'react'
import {Link} from 'react-router-dom'

const TeacherSuccess = () => {
  return (
    <div className="flex justify-center h-screen dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px]">
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Registration Successful!</h1>
      <p className="text-lg mb-4">Thank you for submitting the registration.</p>
      <Link to="/">
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
          Go Back to Form
        </button>
      </Link>
    </div>
  </div>
  )
}

export default TeacherSuccess
