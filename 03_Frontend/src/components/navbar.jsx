import React from 'react'; 
import '../assets/css/navbar.css'; 

import trackItLogo from "../assets/vectors/trackItLogo.svg"; 
import settingsLogo from "../assets/vectors/socialMediaAndOtherIcons/settingsIcon.svg"; 


function Navbar() {
    
    return (
        
        <div id="sticky-navbar">

            <div id="navbar"> 

                <div id="logo-button-container"> 
                    <button id="logo-button"> 
                        <img src={trackItLogo} /> 
                        <div id="cursor-mask"> </div> 
                    </button> 
                </div> 

                <ul id="navlist">
                    
                    <button id="navlist-start">
                        <li data-text="Home"> <span> Home </span> </li>
                    </button>
                    
                    <button>
                        <li data-text="Products"> Products </li>
                    </button>

                    <button>
                        <li data-text="Subscriptions"> Subscriptions </li>
                    </button>

                    <button>
                        <li data-text="Guide"> Guide </li>
                    </button>

                    <button>
                        <li data-text="About"> About </li>
                    </button>

                    <button id="navlist-end">
                        <li data-text="Login"> Login </li>
                    </button>
                    
                </ul>

                <div id="settings-button-container"> 
                    <button id="settings-button"> 
                        <img src={settingsLogo} />
                    </button>
                </div>

            </div>
        </div>
  
    )

}

export default Navbar