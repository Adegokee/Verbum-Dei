import React, { useState } from 'react';

const CreateParent = ({ addMyParent, myerrors }) => {
  const [email, setEmail] = useState('');
  const [phone_number_1, setPhone_number_1] = useState('');
  const [phone_number_2, setPhone_number_2] = useState('');
  const [parent_name, setParent_name] = useState('');
  const [home_address, setHome_address] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous error messages
    setFormErrors({});

    // Basic validation
    const errors = {};
    if (!email) errors.email = 'Email is required';
    if (!phone_number_1) errors.phone_number_1 = 'Phone Number 1 is required';
    if (!parent_name) errors.parent_name = 'Parent Name is required';
    if (!home_address) errors.home_address = 'Home Address is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return; // Stop submission if there are errors
    }

    const newReview = {
      email,
      phone_number_1,
      phone_number_2,
      parent_name,
      home_address,
    };
    
    console.log(newReview);
    addMyParent(newReview);

    // Clear form fields
    setEmail('');
    setPhone_number_1('');
    setPhone_number_2('');
    setParent_name('');
    setHome_address('');

    // Set success message
    setSuccessMessage('Parent information submitted successfully!');
  };

  return (
    <div className='dashboard hero-pattern absolute top-[75px] left-[16%] p-[10px]'>
      <p className='mb-[40px] ml-[150px] text-[#227fff] font-bold text-[20px]'>Parent Form</p>

      <form onSubmit={handleSubmit} className="max-w-3xl p-6 mx-auto space-y-6 bg-white rounded-lg shadow-lg">
        <main className="grid grid-cols-1 gap-6">

          {/* Success Message */}
          {successMessage && <p className="text-sm text-green-500">{successMessage}</p>}

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {formErrors.email && <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>}
            {myerrors.email && <p className="mt-1 text-sm text-red-500">{myerrors.email}</p>}
          </div>

          {/* Phone Number 1 */}
          <div>
            <label htmlFor="phone_number_1" className="block text-sm font-medium text-gray-700">
              Phone Number 1 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phone_number_1"
              name="phone_number_1"
              className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={phone_number_1}
              onChange={(e) => setPhone_number_1(e.target.value)}
              required
            />
            {formErrors.phone_number_1 && <p className="mt-1 text-sm text-red-500">{formErrors.phone_number_1}</p>}
            {myerrors.phone_number_1 && <p className="mt-1 text-sm text-red-500">{myerrors.phone_number_1}</p>}
          </div>

          {/* Phone Number 2 */}
          <div>
            <label htmlFor="phone_number_2" className="block text-sm font-medium text-gray-700">
              Phone Number 2 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phone_number_2"
              name="phone_number_2"
              className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={phone_number_2}
              onChange={(e) => setPhone_number_2(e.target.value)}
            />
            {formErrors.phone_number_2 && <p className="mt-1 text-sm text-red-500">{formErrors.phone_number_2}</p>}
            {myerrors.phone_number_2 && <p className="mt-1 text-sm text-red-500">{myerrors.phone_number_2}</p>}
          </div>

          {/* Parent Name */}
          <div>
            <label htmlFor="parent_name" className="block text-sm font-medium text-gray-700">
              Parent Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="parent_name"
              name="parent_name"
              className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={parent_name}
              onChange={(e) => setParent_name(e.target.value)}
              required
            />
            {formErrors.parent_name && <p className="mt-1 text-sm text-red-500">{formErrors.parent_name}</p>}
            {myerrors.parent_name && <p className="mt-1 text-sm text-red-500">{myerrors.parent_name}</p>}
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
              value={home_address}
              onChange={(e) => setHome_address(e.target.value)}
              required
            />
            {formErrors.home_address && <p className="mt-1 text-sm text-red-500">{formErrors.home_address}</p>}
            {myerrors.home_address && <p className="mt-1 text-sm text-red-500">{myerrors.home_address}</p>}
          </div>

          {/* Submit Button */}
          <div className="col-span-full">
            <button
              type="submit"
              className="w-full py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Submit
            </button>
          </div>

        </main>
      </form>
    </div>
  );
};

export default CreateParent;
