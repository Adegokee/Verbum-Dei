import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateStudent = ({ addReview }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLasttName] = useState('');
  const [otherName, setOtherName] = useState('');
  const [image, setImage] = useState(null);
  const [dob, setDob] = useState('');
  const [nationality, setNationality] = useState('');
  const [religion, setReligion] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [myclass, setMyClass] = useState('');
  const [email, setEmail] = useState('');
  const [myparent, setMyparent] = useState('');
  const [myNumber, setMyNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      firstName,
      lastName,
      otherName,
      image,
      dob,
      nationality,
      religion,
      address,
      gender,
      myclass,
      email,
      myparent,
      myNumber
    };

    // Clear the form fields
    setFirstName('');
    setLasttName('');
    setOtherName('');
    setImage(null);
    setDob('');
    setNationality('');
    setReligion('');
    setAddress('');
    setGender('');
    setMyClass('');
    setEmail('');
    setMyparent('');
    setMyNumber('');

    // Call the addReview function with the new student data
    addReview(newReview);
  };

  return (
    <div className="dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px]">
      <h6 className="p-[10px] text-[#198cff] text-[20px] font-bold">Student Details</h6>

      <form className="flex" onSubmit={handleSubmit}>
        <div className="items-center justify-center w-[250px] h-[210px]">
          <div>
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center mb-[30px] justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="hidden"
              />
            </label>
          </div>
          <div className="max-w-sm mx-auto">
            <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Gender <span className="text-[red]">*</span>
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="" disabled>
                Choose Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="max-w-sm mx-auto mt-[30px]">
            <label htmlFor="class" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Class<span className="text-[red]">*</span>
            </label>
            <select
              id="class"
              value={myclass}
              onChange={(e) => setMyClass(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="" disabled>
                Choose Class
              </option>
              <option value="JSS1">JSS1</option>
              <option value="JSS2">JSS2</option>
              <option value="JSS3">JSS3</option>
              <option value="SS1">SS1</option>
              <option value="SS2">SS2</option>
              <option value="SS3">SS3</option>
            </select>
          </div>
        </div>

        <div>
          <div className="pl-[40px]">
            <div className="grid gap-6 mb-6 md:grid-cols-2 md:w-[900px]">
              <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  First Name<span className="text-[red]">*</span>
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label htmlFor="other_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Other Name<span className="text-[red]">*</span>
                </label>
                <input
                  type="text"
                  value={otherName}
                  onChange={(e) => setOtherName(e.target.value)}
                  id="other_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Last Name<span className="text-[red]">*</span>
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLasttName(e.target.value)}
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Date of Birth<span className="text-[red]">*</span>
                </label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  id="dob"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="nationality" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nationality<span className="text-[red]">*</span>
                </label>
                <input
                  type="text"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  id="nationality"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ghanaian"
                  required
                />
              </div>
              <div>
                <label htmlFor="religion" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Religion<span className="text-[red]">*</span>
                </label>
                <input
                  type="text"
                  value={religion}
                  onChange={(e) => setReligion(e.target.value)}
                  id="religion"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Christian"
                  required
                />
              </div>
              <div>
                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Address<span className="text-[red]">*</span>
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="123 Main St"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email<span className="text-[red]">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="parent" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Parent's Name<span className="text-[red]">*</span>
                </label>
                <input
                  type="text"
                  value={myparent}
                  onChange={(e) => setMyparent(e.target.value)}
                  id="parent"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Jane Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Phone Number<span className="text-[red]">*</span>
                </label>
                <input
                  type="text"
                  value={myNumber}
                  onChange={(e) => setMyNumber(e.target.value)}
                  id="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+233 123 456 7890"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white mt-[20px] mb-[20px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateStudent;


