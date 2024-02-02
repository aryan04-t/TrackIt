import React from 'react'; 
import '../assets/css/navbar.css'; 

import trackItLogo from "../assets/vectors/trackItLogo.svg"; 
import settingsLogo from "../assets/vectors/socialMediaAndOtherIcons/settingsIcon.svg"; 


function Navbar() {
    
    return (
    
        <div id="navbar"> 

            <div id="logo-button-container"> 
                <button id="logo-button"> 
                    <img src={trackItLogo} /> 
                    <div id="cursor-mask"> </div> 
                </button> 
            </div> 

            <ul id="navlist">
                <li id="navlist-start" data-text="Home"> <span> Home </span> </li>
                <li data-text="Products"> Products </li>
                <li data-text="Subscriptions"> Subscriptions </li>
                <li data-text="Guide"> Guide </li>
                <li data-text="About"> About </li>
                <li id="navlist-end" data-text="Login"> Login </li>
            </ul>

            <div id="settings-button-container"> 
                <button id="settings-button"> 
                    <img src={settingsLogo} />
                </button>
            </div>

        </div>
  
    )

}

export default Navbar