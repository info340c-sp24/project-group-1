import React, { useState } from 'react';
import '../css/project-styling.css';
import '../css/login.css';


function CreateAccount(){

    <div className="container">
            <h1>Create an Account</h1>
    
            <div className="create_account_form">
                <form id="create_account">

                    <div className="create_account_form_item">
                        <label for="email_input">Email</label>
                        <input name="email" type="email" placeholder="" id="email_input"></input>
                    </div>

                    <div className="create_account_form_item">
                        <label for="password_input">Password</label>
                        <input name="password" type="password" placeholder="" id="password_input"></input>
                    </div>

                    <div className="create_account_form_item">
                        <label for="confirm_password_input">Confirm Password</label>
                        <input name="confirm_password" type="password" placeholder="" id="confirm_password_input"></input>
                    </div>

                    <div className="create_account_form_item">
                        <button type="submit" name="submit_button" id="submit_create_account_button">Create Account</input>
                    </div>

                    <div className="create_account_form_item">
                        <a href="">Continue as Guest</a>
                    </div>

                    <div className="create_account_form_item">
                        <a href="login.html">Log into existing acount</a>
                    </div>

                </form>
            </div>

        </div>

}

export default CreateAccount;
