import React from 'react';

const AdminInfo = ({ userInfo }) => {
    console.log(userInfo); // Log the userInfo to see its structure

    return (
        <div className="p-4 mt-4 bg-white border rounded-lg shadow-md">
            <h5 className="text-lg font-semibold">User Information</h5>
            {userInfo?.profile_image && (
                <img className="w-24 h-24 mb-2 rounded-full profile-image" src={userInfo.profile_image} alt="Profile" />
            )}
            <p><strong>First Name:</strong> <span>{userInfo?.first_name || 'N/A'}</span></p>
            <p><strong>Last Name:</strong> <span>{userInfo?.last_name || 'N/A'}</span></p>
            <p><strong>Email:</strong> <span>{userInfo?.email || 'N/A'}</span></p>
            <p><strong>Username:</strong> <span>{userInfo?.username || 'N/A'}</span></p>
        </div>
    );
};

export default AdminInfo;



