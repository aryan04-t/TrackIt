import React from 'react'; 
import { NavLink } from 'react-router-dom';

import '../assets/css/navbar.css'; 

import trackItLogo from "../assets/vectors/trackItLogo.svg"; 
import settingsLogo from "../assets/vectors/socialMediaAndOtherIcons/settingsIcon.svg"; 
import hamburgerIcon from "../assets/vectors/socialMediaAndOtherIcons/hamburgerIcon.svg";


function Navbar() {
    
    return (
        
        <div id="sticky-navbar" className='user-select-none'>

            <div id="navbar"> 

                <div id="logo-button-container"> 
                    <button id="logo-button"> 
                        <img src={trackItLogo} /> 
                        <NavLink to='/' >
                            <div id="cursor-mask"> </div> 
                        </NavLink>            
                    </button> 
                </div> 

                <ul id="navlist">

                    <NavLink to='/home' > 
                        <button> 
                            <li data-text="Home"> <span> Home </span> </li>
                        </button> 
                    </NavLink> 
                    
                    <NavLink to='/products' >
                        <button>
                            <li data-text="Products"> Products </li>
                        </button>
                    </NavLink>

                    <NavLink to='/subscriptions' >
                        <button>
                            <li data-text="Subscriptions"> Subscriptions </li>
                        </button>
                    </NavLink> 

                    <button>
                        <li data-text="Guide"> Guide </li>
                    </button>

                    <button>
                        <li data-text="About"> About </li>
                    </button>

                    <button>
                        <li data-text="Login"> Login </li>
                    </button>
                    
                </ul>

                <div id="track-it-typography-logo">
                    <p>
                        TrackIt 
                    </p>
                </div>

                <div id="settings-icon-container"> 
                    <button id="settings-icon"> 
                        <img src={settingsLogo} />
                    </button>
                </div>

                <div id="hamburger-icon-container">
                    <div id="hamburger-icon-background">
                        <button id="hamburger-icon-button">
                            <img id="hamburger-icon-image" src={hamburgerIcon} alt="hamburger icon"/>
                        </button>
                    </div>
                </div>

            </div>
        </div>
  
    )

}

export default Navbar