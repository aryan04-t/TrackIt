import React from 'react'

import '../assets/css/login.css'

import Navbar from './navbar.jsx'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';


function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const onClickLogin = (e) => {

        e.preventDefault();

        console.log(email);
        console.log(password);

        axios.post('http://localhost:3000/login', {email, password})
        .then( (res) => {
            if(res.status === 200){
                navigate('/');
                localStorage.setItem("email", email);
                localStorage.setItem("isLoggedIn", true);
            }
            else{
                localStorage.setItem("isLoggedIn", false);
            }
        })
        .catch( (err) => {
            console.log(err);
        })
    }


  return (
    <div>
    
        <Navbar />

        <div id="login-container">

            <div id="login-template">
                
                <div id="login-background-image-holder">

                </div>
                
                <div id="login-card">
                    
                    <form id="login-form" onSubmit = {onClickLogin}>

                        <div id="login-card-heading">
                            Login into your Account
                        </div>

                        <div id="input-div">

                            <div>
                                <label id="login-email-label" className="login-labels">E-mail: </label>
                                <input className="login-inputs" placeholder='Type your e-mail here' type='text' onChange = { (e) => setEmail(e.target.value) }required></input>
                            </div>

                            <div>
                                <label className="login-labels">Password: </label>
                                <input className="login-inputs" placeholder='Type your password here' type='password' onChange = { (e) => setPassword(e.target.value) } required></input>
                            </div>
                        </div>

                        <button id="login-button" type='submit'>
                            Login
                        </button>

                    </form>


                    <div id="sign-up-redirection-div">
                        Don't have an account? 
                        <NavLink to="/signUp">
                            <button id="sign-up-redirection-button"> Sign Up</button>
                        </NavLink>
                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Login