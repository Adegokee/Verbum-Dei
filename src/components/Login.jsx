// import React, { useState } from 'react';

// const Login = () => {
//   const [adminId, setAdminId] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   // Function to get CSRF token from cookies
//   const getCsrfToken = () => {
//     const name = 'csrftoken=';
//     const decodedCookie = decodeURIComponent(document.cookie);
//     const ca = decodedCookie.split(';');
//     for (let i = 0; i < ca.length; i++) {
//       let c = ca[i].trim();
//       if (c.indexOf(name) === 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return '';
//   };

//   // Function to handle login
//   const handleLogin = (e) => {
//     e.preventDefault(); // Prevent page refresh

//     if (!adminId || !password) {
//       setMessage('Please fill in all fields.');
//       return;
//     }

//     const csrfToken = getCsrfToken();

//     fetch('http://127.0.0.1:8000/subadmin/login/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-CSRFToken': csrfToken, // Include CSRF token in the header
//       },
//       body: JSON.stringify({
//         admin_id: adminId,
//         password: password,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.message === 'Login successful') {
//           setMessage('Login successful!');
//         } else {
//           setMessage('Login failed. Please check your credentials.');
//         }
//       })
//       .catch((error) => {
//         setMessage('An error occurred. Please try again.');
//       });
//   };

//   return (
//     <div className="container">
//       <h2>Admin Login</h2>
//       <div id="message" className="message">
//         {message}
//       </div>
//       <form onSubmit={handleLogin}>
//         <div className="form-group">
//           <label htmlFor="admin_id">Admin ID:</label>
//           <input
//             type="text"
//             id="admin_id"
//             name="admin_id"
//             value={adminId}
//             onChange={(e) => setAdminId(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <button type="submit">Login</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;
