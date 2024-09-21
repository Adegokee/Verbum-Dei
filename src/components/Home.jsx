// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import AdminInfo from '../components/AdminInfo';

// const Home = () => {
//     const [admin_id, setAdminId] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [staff_id, setStaff_id] = useState('');
//     const [userInfo, setUserInfo] = useState(null);
//     const [isSigningUp, setIsSigningUp] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (userInfo) {
//             navigate('/admin-info'); 
//         }
//     }, [userInfo, navigate]);

//     const handleLoginSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('https://verbumdei-management-system-vms.onrender.com/subadmin/login/', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ admin_id, password })
//             });
//             const data = await response.json();

//             if (data.token) {
//                 alert('Login successful!');
//                 window.localStorage.setItem('token', data.token);
//                 setUserInfo(data.user); 
//             } else {
//                 alert('Error: ' + JSON.stringify(data));
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     const handleSignUpSubmit = async (e) => {
//         e.preventDefault();

//         if (password !== confirmPassword) {
//             alert('Passwords do not match. Please try again.');
//             return; 
//         }

//         try {
//             const response = await fetch('https://verbumdei-management-system-vms.onrender.com/subadmin/signup/', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ staff_id, password, confirm_password: confirmPassword })
//             });
//             const data = await response.json();

//             if (data.success) {
//                 alert('Sign Up successful! You can now log in.');
//                 setIsSigningUp(false);
//             } else {
//                 alert('Error: ' + JSON.stringify(data));
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//        <>
//         <div className="mybg absolute top-[-100px] z-[1000] mx-auto mt-12">
//             <div className="flex justify-center relative top-[200px]">
//                 <div className="w-full max-w-md">
//                     <div className="bg-white rounded-lg shadow-md">
//                         <div className="p-4 text-center text-white bg-blue-500 rounded-t-lg">
//                             <h4>{isSigningUp ? 'Sign Up' : 'SubAdmin Login'}</h4>
//                         </div>
//                         <div className="p-6">
//                             {!isSigningUp ? (
//                                 <form id="login-form" onSubmit={handleLoginSubmit}>
//                                     <div className="mb-4">
//                                         <label htmlFor="admin_id" className="block text-sm font-medium text-gray-700">Admin ID</label>
//                                         <input
//                                             type="text"
//                                             className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                                             id="admin_id"
//                                             placeholder="Enter Admin ID"
//                                             value={admin_id}
//                                             onChange={(e) => setAdminId(e.target.value)}
//                                             required
//                                         />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//                                         <input
//                                             type="password"
//                                             className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                                             id="password"
//                                             placeholder="Enter Password"
//                                             value={password}
//                                             onChange={(e) => setPassword(e.target.value)}
//                                             required
//                                         />
//                                     </div>
//                                     <button type="submit" className="w-full py-2 text-white transition duration-200 bg-blue-500 rounded-md hover:bg-blue-600">Login</button>
//                                     <button type="button" className="w-full mt-2 text-blue-500 hover:underline" onClick={() => setIsSigningUp(true)}>Sign Up</button>
//                                 </form>
//                             ) : (
//                                 <form id="signup-form" onSubmit={handleSignUpSubmit}>
//                                     <div className="mb-4">
//                                         <label htmlFor="staff_id" className="block text-sm font-medium text-gray-700">Admin ID</label>
//                                         <input
//                                             type="text"
//                                             className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                                             id="staff_id"
//                                             placeholder="Enter Admin ID"
//                                             value={staff_id}
//                                             onChange={(e) => setStaff_id(e.target.value)}
//                                             required
//                                         />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//                                         <input
//                                             type="password"
//                                             className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                                             id="password"
//                                             placeholder="Enter Password"
//                                             value={password}
//                                             onChange={(e) => setPassword(e.target.value)}
//                                             required
//                                         />
//                                     </div>
//                                     <div className="mb-4">
//                                         <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
//                                         <input
//                                             type="password"
//                                             className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                                             id="confirm_password"
//                                             placeholder="Confirm Password"
//                                             value={confirmPassword}
//                                             onChange={(e) => setConfirmPassword(e.target.value)}
//                                             required
//                                         />
//                                     </div>
//                                     <button type="submit" className="w-full py-2 text-white transition duration-200 bg-blue-500 rounded-md hover:bg-blue-600">Sign Up</button>
//                                     <button type="button" className="w-full mt-2 text-blue-500 hover:underline" onClick={() => setIsSigningUp(false)}>Back to Login</button>
//                                 </form>
//                             )}
//                             {userInfo && <AdminInfo userInfo={userInfo} />}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//        </>
//     );
// };

// export default Home;




import React, { useState, createContext, useContext } from 'react';
import {Link} from "react-router-dom"


// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//     const [userInfo, setUserInfo] = useState(null);

//     return (
//         <UserContext.Provider value={{ userInfo, setUserInfo }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// export const useUser = () => {
//     return useContext(UserContext);
// };

const Home = ( {handleLoginSubmit, handleSignUpSubmit, isSigningUp, setIsSigningUp, userInfo, setUserInfo, staff_id, setStaffId, confirmPassword, setConfirmPassword, password, setPassword, admin_id, setAdminId}) => {
    
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 mybg absolute top-[-100px] z-[1000] mx-auto mt-12">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-semibold text-center text-gray-700">
                    {userInfo ? 'User Information' : isSigningUp ? 'Sign Up' : 'SubAdmin Login'}
                </h2>

                {userInfo ? (
                    <div className="mt-4 text-center">
                        {userInfo.profile_image && (
                            <img className="w-24 h-24 mx-auto rounded-full" src={userInfo.profile_image} alt="Profile" />
                        )}
                        <p className="mt-2"><strong>First Name:</strong> {userInfo.first_name}</p>
                        <p><strong>Last Name:</strong> {userInfo.last_name}</p>
                        <p><strong>Email:</strong> {userInfo.email}</p>
                        <p><strong>Username:</strong> {userInfo.username}</p>
                        <button onClick={() => { setUserInfo(null); setIsSigningUp(false); }} className="px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600">
                           <Link to="/dashboard">
                                    Go To Dashboard
                           </Link>
                        </button>
                    </div>
                ) : (
                    <form onSubmit={isSigningUp ? handleSignUpSubmit : handleLoginSubmit}>
                        <div className="mb-4">
                            {isSigningUp ? (
                                <>
                                    <label className="block mb-1 text-gray-600" htmlFor="staff_id">Staff ID</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        id="staff_id"
                                        placeholder="Enter Staff ID"
                                        value={staff_id}
                                        onChange={(e) => setStaffId(e.target.value)}
                                        required
                                    />
                                </>
                            ) : (
                                <>
                                    <label className="block mb-1 text-gray-600" htmlFor="admin_id">Admin ID</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        id="admin_id"
                                        placeholder="Enter Admin ID"
                                        value={admin_id}
                                        onChange={(e) => setAdminId(e.target.value)}
                                        required
                                    />
                                </>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block mb-1 text-gray-600" htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {isSigningUp && (
                            <div className="mb-4">
                                <label className="block mb-1 text-gray-600" htmlFor="confirm_password">Confirm Password</label>
                                <input
                                    type="password"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    id="confirm_password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                        )}
                        <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                            {isSigningUp ? 'Sign Up' : 'Login'}
                        </button>
                        <button type="button" className="w-full mt-2 text-blue-500 hover:underline" onClick={() => setIsSigningUp(!isSigningUp)}>
                            {isSigningUp ? 'Back to Login' : 'Sign Up'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Home;

