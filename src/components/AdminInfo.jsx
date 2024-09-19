import React from 'react';

const AdminInfo = ({ userInfo }) => {
    console.log(userInfo)
    
    // const defaultUser = {
    //     first_name: 'N/A',
    //     last_name: 'N/A',
    //     email: 'N/A',
    //     username: 'N/A',
    //     profile_image: ''
    // };
    
    // const currentUser = user || defaultUser;

    return   (
        <div className="mt-4 p-4 border rounded-lg shadow-md bg-white">
            <h5 className="font-semibold text-lg">User Information</h5>
            {userInfo?.profile_image && (
                <img className="profile-image rounded-full w-24 h-24 mb-2" src={userInfo.profile_image} alt="Profile" />
            )}
            <p><strong>First Name:</strong> <span>{userInfo?.first_name}</span></p>
            <p><strong>Last Name:</strong> <span>{userInfo?.last_name}</span></p>
            <p><strong>Email:</strong> <span>{userInfo?.email}</span></p>
            <p><strong>Username:</strong> <span>{userInfo?.username}</span></p>
        </div>
    )
};

export default AdminInfo;
