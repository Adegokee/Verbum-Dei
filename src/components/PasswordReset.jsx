import React, { useState } from 'react';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://service.verbumdeiportal.com/sub-admin/api/auth/password-reset/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Password reset request failed');
      }

      setSuccess('Password reset instructions have been sent to your email.');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="password-reset-container dashboard absolute bg-[#f5f9fc] top-[75px] left-[16%] p-[10px]'">
      <h2>Password Reset</h2>
      <form onSubmit={handlePasswordReset}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default PasswordReset;
