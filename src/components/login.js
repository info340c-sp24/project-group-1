import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../css/project-styling.css';
import '../css/login.css';


function Login(){

    return (
        <div className="container">
        <h1>Sign in</h1>
    
        <div className="login_form">
            <form>

                <div className="login_form_item">
                    <label for="email_input">Email</label>
                    <input name="email" type="email" placeholder="" id="email_input"></input>
                </div>

                <div className="login_form_item">
                    <label for="password_input">Password</label>
                    <input name="password" type="password" placeholder="" id="password_input"></input>
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