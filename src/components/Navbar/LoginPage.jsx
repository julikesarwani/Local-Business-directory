import React, { useState } from 'react';

const LoginPage = ({ onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login and Sign Up
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]); // Store registered users

  // Function to handle Login or Sign Up submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || (isSignUp && !confirmPassword)) {
      setError('Please fill in all fields.');
      return;
    }

    if (isSignUp) {
      // Handle Sign Up
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }

      // Check if the email is already registered
      if (users.find((user) => user.email === email)) {
        setError('Email is already registered.');
        return;
      }

      // Add user to the list
      setUsers([...users, { email, password }]);
      alert('Sign-Up successful! You can now log in.');
      setError('');
      setIsSignUp(false); // Switch to login after successful sign-up
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } else {
      // Handle Login
      const existingUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (existingUser) {
        alert('Login successful!');
        setError('');
        onClose(); // Close the modal
      } else {
        setError('Invalid email or password.');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b px-4 py-2">
          <h2 className="text-lg font-semibold text-gray-800">
            {isSignUp ? 'Sign Up' : 'Login'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 p-1"
          >
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Confirm Password Field (Only for Sign-Up) */}
            {isSignUp && (
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Confirm your password"
                />
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-4 text-sm text-red-600">{error}</div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
            >
              {isSignUp ? 'Sign Up' : 'Login'}
            </button>
          </form>
        </div>

        {/* Toggle Between Login and Sign Up */}
        <div className="text-center p-4 border-t text-sm">
          {isSignUp ? (
            <p>
              Already have an account?{' '}
              <button
                onClick={() => {
                  setIsSignUp(false);
                  setError('');
                }}
                className="text-blue-500 hover:underline"
              >
                Login
              </button>
            </p>
          ) : (
            <p>
              Don't have an account?{' '}
              <button
                onClick={() => {
                  setIsSignUp(true);
                  setError('');
                }}
                className="text-blue-500 hover:underline"
              >
                Sign Up
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
