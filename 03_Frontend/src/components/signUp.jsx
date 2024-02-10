import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

import Navbar from './navbar.jsx'
import '../assets/css/signUp.css'

function Signup() {

    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 

    const navigate = useNavigate();
    
    const createUser = (e) => {
        
        e.preventDefault();
        
        axios.post('http://localhost:3000/createUser', {firstName, lastName, email, password})
        .then( (res) => {
            if(res.status === 200){
                navigate('/login'); 
            }
        })
        .catch( (err) => {
            console.log(err);
            res.status(400).json({message : "Internal server error"});
        });

    }

  return (
    <div>
        
        <Navbar />

        <div id="sign-up-container">

            <div id="sign-up-template">
                
                <div id="sign-up-card">
                    
                    <form id="sign-up-form" onSubmit={createUser}>

                        <div id="sign-up-card-heading">
                            Create a new Account
                        </div>

                        <div id="input-div">

                            <div>
                                <label id="sign-up-first-name-label" className="sign-up-labels">First Name: </label>
                                <input className="sign-up-inputs" placeholder='Type your fisrt name here' type='text' onChange={ (e) => setFirstName(e.target.value)} required></input>
                            </div>

                            <div>
                                <label id="sign-up-last-name-label" className="sign-up-labels"> Last Name: </label>
                                <input className="sign-up-inputs" placeholder='Type your last name here' type='text' onChange={ (e) => setLastName(e.target.value)} required></input>
                            </div>

                            <div>
                                <label id="sign-up-email-label" className="sign-up-labels">E-mail: </label>
                                <input className="sign-up-inputs" placeholder='Type your e-mail here' type='text' onChange={ (e) => setEmail(e.target.value)} required></input>
                            </div>

                            <div>
                                <label id="sign-up-password-label" className="sign-up-labels">Password: </label>
                                <input className="sign-up-inputs" placeholder='Type your password here' type='password' onChange={ (e) => setPassword(e.target.value)} required></input>
                            </div>
                        </div>

                        <button id="sign-up-button" type='submit'>
                            Sign-Up
                        </button>

                    </form>

                    <div id="login-redirection-div">
                        Already have an account? 
                        <NavLink to="/login">
                            <button id="login-redirection-button"> Login </button>
                        </NavLink>
                    </div>

                </div>

                
                <div id="sign-up-background-image-holder">

                </div>

            </div>

        </div>
        
    </div>
  )
}

export default Signup