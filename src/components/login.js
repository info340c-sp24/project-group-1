import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './FirebaseConfig';
import '../css/project-styling.css';
import '../css/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/search');
    } catch (error) {
      console.error('Error signing in with password and email', error);
      alert('Error signing in: ' + error.message); // Add this line to display error messages to the user
    }
  };

  return (
    <div className="container">
      <h1>Sign in</h1>
      <div className="login_form">
        <form onSubmit={handleLogin}>
          <div className="login_form_item">
            <label htmlFor="email_input">Email</label>
            <input
              name="email"
              type="email"
              id="email_input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login_form_item">
            <label htmlFor="password_input">Password</label>
            <input
              name="password"
              type="password"
              id="password_input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login_form_item">
            <button type="submit">Sign In</button>
          </div>
          <div className="login_form_item">
            <Link to="/create account">Create Account</Link>
          </div>
          <div className="login_form_item">
            <Link to="/search">Continue as Guest</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;