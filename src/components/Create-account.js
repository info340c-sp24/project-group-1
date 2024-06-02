import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/project-styling.css';
import '../css/login.css';
import { auth } from './Firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirm_password') {
      setConfirmPassword(value);
    }
  };

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isNotReadytoSubmit = (!isValidEmail(email) || password === '' || password !== confirmPassword);

  return (
    <div className="container">
      <h1>Create an Account</h1>
      <div className="create_account_form">
        <form onSubmit={(e) => e.preventDefault()}>

          <div className="create_account_form_item">
            <label htmlFor="email_input">Email</label>
            <input
              name="email"
              type="email"
              id="email_input"
              value={email}
              onChange={handleChange}
            />
          </div>

          <div className="create_account_form_item">
            <label htmlFor="password_input">Password</label>
            <input
              name="password"
              type="password"
              id="password_input"
              value={password}
              onChange={handleChange}
            />
          </div>

          <div className="create_account_form_item">
            <label htmlFor="confirm_password_input">Confirm Password</label>
            <input
              name="confirm_password"
              type="password"
              id="confirm_password_input"
              value={confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button
            className="create_account_form_item"
            onClick={handleSignUp}
            disabled={isNotReadytoSubmit}
          >
            Create Account
          </button>

          <div className="create_account_form_item">
            <Link to="/search">Continue as Guest</Link>
          </div>

          <div className="create_account_form_item">
            <Link to="/login">Log into existing account</Link>
          </div>

          {errorMessage && <div className="error_message">{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;