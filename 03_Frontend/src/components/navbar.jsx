import React from 'react'
import '../../public/static/css/navbar.css'


function Navbar() {
    
    return (
    
        <div id="navbar">

            <div id="logo-button-container">
                <button id="logo-button">
                    <img src="../../public/static/vectors/Trackit Logo.svg" />
                </button> 
            </div> 

            <ul id="navlist">
                <li id="navlist-start" data-text="Home"> <span> Home </span> </li>
                <li className="rest-nav-list" data-text="Products"> Products </li>
                <li className="rest-nav-list" data-text="Subscriptions"> Subscriptions </li>
                <li className="rest-nav-list" data-text="Guide"> Guide </li>
                <li className="rest-nav-list" data-text="About"> About </li>
                <li id="navlist-end" data-text="Login"> Login </li>
            </ul>

            <div id="settings-button-container"> 
                <button id="settings-button"> 
                    <img src="../../public/static/vectors/social media and other icons/Settings Icon.svg" />
                </button>
            </div>

        </div>
  
    )

}

export default Navbar