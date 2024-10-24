import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/users/login', { email, password });
      if (res.data.token) {
        sessionStorage.setItem('token', res.data.token);
        navigate('/dashboard');
      } else {
        setError('Login failed, no token received');
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-96 p-4 bg-white shadow-lg rounded" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Email"
          aria-invalid={error ? "true" : "false"}
        />
        <label htmlFor="password" className="sr-only">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Password"
          aria-invalid={error ? "true" : "false"}
        />
        <button className="w-full bg-pink-500 text-white p-2 rounded">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
