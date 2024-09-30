import React, { useState, createContext, useContext } from 'react';
import {Link} from "react-router-dom"
import Modal from "../App"



const Home = ( { showModal,modalMessage, setModalMessage , setShowModal,handleLoginSubmit, handleSignUpSubmit, isSigningUp, setIsSigningUp, userInfo, setUserInfo, staff_id, setStaffId, confirmPassword, setConfirmPassword, password, setPassword, admin_id, setAdminId}) => {
    
   
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 fixed mybg overflow-y-hidden top-[-100px] z-[1000] mx-auto mt-12">
            <div className="absolute top-[250px]  w-1/4 bg-white rounded-lg shadow-md p-6">
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
                            {isSigningUp ? '' : 'Login'}
                        </button>
                        <button type="button" className="w-full mt-2 text-blue-500 hover:underline" onClick={() => setIsSigningUp(!isSigningUp)}>
                            {isSigningUp ? 'Back to Login' : ''}
                        </button>
                    </form>
                    
                )}
                  <div>
     

    
    
    </div>
                
            </div>
        </div>
    );
};

export default Home;

