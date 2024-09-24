import React, { useState } from 'react';

const StudentCreate = ({ myparent, myclass }) => {
    const [errors, setErrors] = useState({});

    const validateForm = (formData) => {
        const newErrors = {};
        if (!formData.get('first_name')) newErrors.first_name = 'First Name is required.';
        if (!formData.get('last_name')) newErrors.last_name = 'Last Name is required.';
        if (!formData.get('date_of_birth')) newErrors.date_of_birth = 'Date of Birth is required.';
        if (!formData.get('gender')) newErrors.gender = 'Gender is required.';
        if (!formData.get('type')) newErrors.type = 'Type is required.';
        if (!formData.get('home_address')) newErrors.home_address = 'Home Address is required.';
        if (!formData.get('state_of_origin')) newErrors.state_of_origin = 'State of Origin is required.';
        if (!formData.get('local_government_area')) newErrors.local_government_area = 'Local Government Area is required.';
        if (!formData.get('nationality')) newErrors.nationality = 'Nationality is required.';
        if (!formData.get('parent')) newErrors.parent = 'Parent is required.';
        if (!formData.get('religion')) newErrors.religion = 'Religion is required.';
        if (!formData.get('class_assigned')) newErrors.class_assigned = 'Class Assigned is required.';

        return newErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const validationErrors = validateForm(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            console.log('Validation Errors:', validationErrors);
            return;
        }

        try {
            const response = await fetch('https://service.verbumdeiportal.com/student/students/', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Response Data:', data);
            alert('Student added successfully!');
            event.target.reset();
            setErrors({});
        } catch (error) {
            console.error('Error adding student:', error);
            alert('Failed to add student. Please try again.');
        }
    };

    return (
        <div className="dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px] ">
            <form
                id="student-form"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="max-w-3xl p-6 mx-auto space-y-6 bg-white rounded-lg shadow-lg"
            >
                <main className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                    {/* Upload Profile Image */}
                    <div className="flex items-center justify-center border-2 border-gray-300 rounded-lg p-2 h-[70px] bg-gray-50">
                        <input
                            type="file"
                            id="upload"
                            name="upload"
                            accept="image/*"
                            className="flex-grow px-3 py-2 font-medium text-gray-800 dark:bg-gray-900 dark:text-gray-300"
                            required
                        />
                    </div>

                    {/* First Name */}
                    <div>
                        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                            First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                        {errors.first_name && <span className="text-red-500">{errors.first_name}</span>}
                    </div>

                    {/* Other Name */}
                    <div>
                        <label htmlFor="other_name" className="block text-sm font-medium text-gray-700">
                            Other Name
                        </label>
                        <input
                            type="text"
                            id="other_name"
                            name="other_name"
                            className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                            Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                        {errors.last_name && <span className="text-red-500">{errors.last_name}</span>}
                    </div>

                    {/* Date of Birth */}
                    <div>
                        <label htmlFor="date_of_birth" className="block text-sm font-medium text-gray-700">
                            Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="date"
                            id="date_of_birth"
                            name="date_of_birth"
                            className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                        {errors.date_of_birth && <span className="text-red-500">{errors.date_of_birth}</span>}
                    </div>

                    {/* Gender */}
                    <div>
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                            Gender <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="gender"
                            name="gender"
                            className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="MALE">MALE</option>
                            <option value="FEMALE">FEMALE</option>
                        </select>
                        {errors.gender && <span className="text-red-500">{errors.gender}</span>}
                    </div>

                    {/* Type */}
                    <div>
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                            Type <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="type"
                            name="type"
                            className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        >
                            <option value="">Select Type</option>
                            <option value="BOARDER">BOARDER</option>
                            <option value="DAY">DAY</option>
                        </select>
                        {errors.type && <span className="text-red-500">{errors.type}</span>}
                    </div>

                    {/* Home Address */}
                    <div>
                        <label htmlFor="home_address" className="block text-sm font-medium text-gray-700">
                            Home Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="home_address"
                            name="home_address"
                            className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                        {errors.home_address && <span className="text-red-500">{errors.home_address}</span>}
                    </div>

                    {/* State of Origin */}
                    <div>
                        <label htmlFor="state_of_origin" className="block text-sm font-medium text-gray-700">
                            State of Origin <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="state_of_origin"
                            name="state_of_origin"
                            className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                        {errors.state_of_origin && <span className="text-red-500">{errors.state_of_origin}</span>}
                    </div>

                    {/* Local Government Area */}
                    <div>
                        <label htmlFor="local_government_area" className="block text-sm font-medium text-gray-700">
                            Local Government Area <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="local_government_area"
                            name="local_government_area"
                            className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                        {errors.local_government_area && <span className="text-red-500">{errors.local_government_area}</span>}
                    </div>

                    {/* Nationality */}
                    <div>
                        <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
                            Nationality <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="nationality"
                            name="nationality"
                            className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                        {errors.nationality && <span className="text-red-500">{errors.nationality}</span>}
                    </div>

                    {/* Parent */}
                    <div>
                        <label htmlFor="parent" className="block text-sm font-medium text-gray-700">
                            Parent <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="parent"
                            name="parent"
                            className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        >
                            {myparent.map((x) => (
                                <option key={x.parent_name} value={x.parent_name}>
                                    {x.parent_name}
                                </option>
                            ))}
                        </select>
                        {errors.parent && <span className="text-red-500">{errors.parent}</span>}
                    </div>

                    {/* Class Assigned */}
                    <div>
                        <label htmlFor="class_assigned" className="block text-sm font-medium text-gray-700">
                            Class Assigned <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="class_assigned"
                            name="class_assigned"
                            className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        >
                            {myclass.map((x) => (
                                <option key={x.name} value={x.name}>
                                    {x.name}
                                </option>
                            ))}
                        </select>
                        {errors.class_assigned && <span className="text-red-500">{errors.class_assigned}</span>}
                    </div>

                    {/* Religion */}
                    <div>
                        <label htmlFor="religion" className="block text-sm font-medium text-gray-700">
                            Religion <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="religion"
                            name="religion"
                            className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                        />
                        {errors.religion && <span className="text-red-500">{errors.religion}</span>}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="mt-4 bg-blue-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                        >
                            Submit
                        </button>
                    </div>
                </main>
            </form>
        </div>
    );
};
export default StudentCreate;
