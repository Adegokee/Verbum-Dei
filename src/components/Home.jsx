


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import AdminInfo from '../components/AdminInfo';

const Home = () => {
    const [admin_id, setAdminId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [staff_id, setStaff_id] = useState('');
    const [userInfo, setUserInfo] = useState(null);
    const [isSigningUp, setIsSigningUp] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        // Redirect to AdminInfo if userInfo is set
        if (userInfo) {
            navigate('/admin-info'); // Replace with your actual route
        }
    }, [userInfo, navigate]);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://verbumdei-management-system-vms.onrender.com/subadmin/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ admin_id, password })
            });
            const data = await response.json();

            if (data.token) {
                alert('Login successful!');
                window.localStorage.setItem('token', data.token);
                setUserInfo(data.user);
            } else {
                alert('Success: ' + JSON.stringify(data));
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return; 
        }

        try {
            const response = await fetch('https://verbumdei-management-system-vms.onrender.com/subadmin/signup/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ staff_id, password, confirm_password: confirmPassword })
            });
            const data = await response.json();

            if (data.success) {
                alert('Sign Up successful! You can now log in.');
                setIsSigningUp(false); 
            } else {
                alert('Success: ' + JSON.stringify(data));
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="mybg absolute top-[-100px] z-[1000] mx-auto mt-12">
            <div className="flex justify-center relative top-[200px]">
                <div className="w-full max-w-md">
                    <div className="bg-white rounded-lg shadow-md">
                        <div className="text-center text-white bg-blue-500 rounded-t-lg p-4">
                            <h4>{isSigningUp ? 'Sign Up' : 'SubAdmin Login'}</h4>
                        </div>
                        <div className="p-6">
                            {!isSigningUp ? (
                                <form id="login-form" onSubmit={handleLoginSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="admin_id" className="block text-sm font-medium text-gray-700">Admin ID</label>
                                        <input
                                            type="text"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            id="admin_id"
                                            placeholder="Enter Admin ID"
                                            value={admin_id}
                                            onChange={(e) => setAdminId(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                        <input
                                            type="password"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            id="password"
                                            placeholder="Enter Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">Login</button>
                                    <button type="button" className="w-full text-blue-500 mt-2 hover:underline" onClick={() => setIsSigningUp(true)}>Sign Up</button>
                                </form>
                            ) : (
                                <form id="signup-form" onSubmit={handleSignUpSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="admin_id" className="block text-sm font-medium text-gray-700">Admin ID</label>
                                        <input
                                            type="text"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            id="admin_id"
                                            placeholder="Enter Admin ID"
                                            value={staff_id}
                                            onChange={(e) => setStaff_id(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                        <input
                                            type="password"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            id="password"
                                            placeholder="Enter Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                                        <input
                                            type="password"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            id="confirm_password"
                                            placeholder="Confirm Password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200">Sign Up</button>
                                    <button type="button" className="w-full text-blue-500 mt-2 hover:underline" onClick={() => setIsSigningUp(false)}>Back to Login</button>
                                </form>
                            )}
                            {userInfo && 
                            <AdminInfo userInfo={userInfo} />
                          
                            
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

