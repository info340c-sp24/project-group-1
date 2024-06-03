import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/project-styling.css';
import '../css/login.css';
import { auth } from './Firebase.js';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

function Login() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setEmail('');
        setPassword('');
        setErrorMessage('');
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="container">
      <h1>Sign in</h1>
      <div className="login_form">
        <form onSubmit={(e) => e.preventDefault()}>

          <div className="login_form_item">
            <label htmlFor="email_input">Email</label>
            <input
              name="email"
              type="email"
              id="email_input"
              value={email}
              onChange={handleChange}
            />
          </div>

          <div className="login_form_item">
            <label htmlFor="password_input">Password</label>
            <input
              name="password"
              type="password"
              id="password_input"
              value={password}
              onChange={handleChange}
            />
          </div>

          <button
            onClick={handleSignIn}
          >
            Sign In
          </button>

          <div className="login_form_item">
            <Link to="/create-account">Create Account</Link>
          </div>

          <div className="login_form_item">
            <Link to="/search">Continue as Guest</Link>
          </div>

          {errorMessage && <div className="error_message">{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
}

export default Login;
