import React, { useState } from 'react';

const AuthForm = ({ onSignup, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('student');

  const handleSignup = () => {
    onSignup({ email, password, name, role });
  };

  const handleLogin = () => {
    onLogin({ username: email, password });
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Signup/Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      >
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>
      <div className="flex space-x-2">
        <button onClick={handleSignup} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Signup
        </button>
        <button onClick={handleLogin} className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
          Login
        </button>
      </div>
    </div>
  );
};

export default AuthForm;