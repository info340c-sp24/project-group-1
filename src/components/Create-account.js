import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './FirebaseConfig';
import '../css/project-styling.css';
import '../css/login.css';

function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/search');
    } catch (error) {
      console.error('Error creating account with email and password', error);
    }
  };

  return (
    <div className="container">
      <h1>Create an Account</h1>
      <div className="create_account_form">
        <form onSubmit={handleCreateAccount}>
          <div className="create_account_form_item">
            <label htmlFor="email_input">Email</label>
            <input
              name="email"
              type="email"
              id="email_input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="create_account_form_item">
            <label htmlFor="password_input">Password</label>
            <input
              name="password"
              type="password"
              id="password_input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="create_account_form_item">
            <label htmlFor="confirm_password_input">Confirm Password</label>
            <input
              name="confirm_password"
              type="password"
              id="confirm_password_input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="create_account_form_item">
            <button type="submit">Create Account</button>
          </div>
          <div className="create_account_form_item">
            <Link to="/search">Continue as Guest</Link>
          </div>
          <div className="create_account_form_item">
            <Link to="/login">Log into existing account</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
