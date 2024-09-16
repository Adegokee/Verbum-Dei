import React, { useState } from 'react';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); 
  const [teacher_id, SetTeacher_id] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle user login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    
    try {
      const response = await fetch('https://verbumdei-management-system-vms.onrender.com/teacheradmin/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          teacher_id: teacher_id,
          password: password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
      
        localStorage.setItem('token', data.token);  
        setIsLoggedIn(true);
        setSuccessMessage('Login successful');
        console.log('Token:', data.token);
        fetchProtectedData();
      } else {
        setErrorMessage(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };
  
 
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
  
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
  
    try {
      const response = await fetch('https://verbumdei-management-system-vms.onrender.com/teacheradmin/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          teacher_id: teacher_id,
          password: password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
      
        localStorage.setItem('token', data.token);
  
        setSuccessMessage('Sign-up successful! You can now log in.');
        setIsSignUp(false);
      } else {
        setErrorMessage(data.message || 'Sign-up failed. Please try again.');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  // Fetch protected data with JWT token
  const fetchProtectedData = async () => {
    const token = localStorage.getItem('token');
  
    if (!token) {
      console.error('No token found, please log in.');
      return;
    }
  
    try {
      const response = await fetch('https://verbumdei-management-system-vms.onrender.com/protected-endpoint/', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,  // Pass JWT token for authorization
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Protected data:', data);
      } else {
        console.error('Failed to fetch protected data:', data.message);
      }
    } catch (error) {
      console.error('Error fetching protected data:', error);
    }
  };

  return (
    <div className="mybg absolute top-[-100px] z-[1000]">
      {!isLoggedIn ? (
        <div className="max-w-sm mx-auto bg-[#f5f9fc] p-[20px] relative top-[200px]">
          {!isSignUp ? (
            // Login Form
            <form onSubmit={handleLoginSubmit}>
              <h2 className="text-center text-lg font-bold mb-5">Login</h2>
              {errorMessage && (
                <div className="text-red-500 text-sm mb-3">{errorMessage}</div>
              )}
              {successMessage && (
                <div className="text-green-500 text-sm mb-3">{successMessage}</div>
              )}
              <div className="mb-5">
                <label htmlFor="teacher_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teacher's ID</label>
                <input
                  type="text"
                  id="teacher_id"
                  value={teacher_id}
                  onChange={(e) => SetTeacher_id(e.target.value)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Submit
              </button>
              <p className="text-sm mt-3">
                New user?{' '}
                <button
                  type="button"
                  onClick={() => setIsSignUp(true)}
                  className="text-blue-600 hover:underline"
                >
                  Sign Up
                </button>
              </p>
            </form>
          ) : (
            // Sign-up Form
            <form onSubmit={handleSignUpSubmit}>
              <h2 className="text-center text-lg font-bold mb-5">Sign Up</h2>
              {errorMessage && (
                <div className="text-red-500 text-sm mb-3">{errorMessage}</div>
              )}
              {successMessage && (
                <div className="text-green-500 text-sm mb-3">{successMessage}</div>
              )}
              <div className="mb-5">
                <label htmlFor="teacher_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Teacher's ID</label>
                <input
                  type="text"
                  id="text"
                  value={teacher_id}
                  onChange={(e) => SetTeacher_id(e.target.value)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <input
                  type="password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign Up
              </button>
              <p className="text-sm mt-3">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setIsSignUp(false)}
                  className="text-blue-600 hover:underline"
                >
                  Log In
                </button>
              </p>
            </form>
          )}
        </div>
      ) : (
        // If the user is logged in, display welcome message or protected data
        <div className="max-w-sm mx-auto bg-[#f5f9fc] p-[20px] relative top-[200px] text-center">
          <h2 className="text-lg font-bold mb-5">Welcome, You are logged in!</h2>
          <p className="mb-5">You now have access to protected content.</p>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={fetchProtectedData}
          >
            Fetch Protected Data
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
