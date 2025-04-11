import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    const existingAdmin = localStorage.getItem('admin');
    if (existingAdmin) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await axios.post('http://localhost:3001/api/admin/login', formData);
      const data = res.data;

      if (data.message === 'success') {
        localStorage.setItem('admin', JSON.stringify(data.admin));
        navigate('/admin');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoFocus
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>

        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <style>{`
        .admin-login {
          max-width: 400px;
          margin: 4rem auto;
          padding: 2rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: #fefefe;
          box-shadow: 0 0 10px rgba(0,0,0,0.06);
        }

        h2 {
          text-align: center;
          margin-bottom: 1.5rem;
          color: #333;
        }

        label {
          display: block;
          margin-bottom: 1.2rem;
          color: #222;
        }

        input {
          width: 100%;
          padding: 0.5rem;
          margin-top: 0.25rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .error {
          color: red;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        button {
          width: 100%;
          padding: 0.6rem;
          background: #40B93C;
          color: white;
          border: none;
          border-radius: 4px;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          background: #36a833;
        }

        button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
