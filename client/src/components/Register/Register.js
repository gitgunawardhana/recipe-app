import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/api/users/register`, user);
      navigate('/');
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-96 p-4 bg-white shadow-lg rounded" onSubmit={handleRegister}>
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Name"
        />
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Email"
        />
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
          placeholder="Password"
        />
        <button className="w-full bg-pink-500 text-white p-2 rounded">Create Account</button>
        <p className='opacity-75 mt-2'>Already have an account? <Link to={'/'} className='text-pink-500'>Log in</Link></p>
      </form>
    </div>
  );
};

export default Register;
