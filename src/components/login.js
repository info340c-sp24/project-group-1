import React, { useState } from 'react';
import '../css/project-styling.css';
import '../css/login.css';

function Login(){

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
                    <a href="">Continue as Guest</a>
                </div>

                <div className="login_form_item">
                    <a href="create-account.html">Create Account</a>
                </div>

            </form>
        </div>
    </div>

}

export default Login;