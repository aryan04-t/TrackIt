import React from 'react'

import '../assets/css/subscriptions.css'; 


import Navbar from './navbar.jsx'; 


import greenTick from '../assets/vectors/socialMediaAndOtherIcons/greenTick.svg'; 
import redCross from '../assets/vectors/socialMediaAndOtherIcons/redCross.svg'


function  Subscriptions() {
  return (

    <div id="subscriptions" className="user-select-none">

        <div id="subscriptions-container-div"> 

            <Navbar />

            <div id="subscriptions-heading-div">
                <p id="subscriptions-heading">
                    Monthly Subscriptions Plan 
                </p>
            </div>

            <div id="subscription-cards-container-div">

                <div id="basic-subscription-card">
                    
                    <p id="basic-heading"> Basic </p>

                    <span className='horizontal-line'></span>
                    
                    
                    <img className="green-tick" id="basic-green-tick-1" src={greenTick} alt="green tick" />
                    
                    <img className="green-tick" id="basic-green-tick-2" src={greenTick} alt="green tick" />
                    
                    <img className="green-tick" id="basic-green-tick-3" src={greenTick} 
                    alt="green tick" />
                    
                    <img className="red-cross" id="basic-red-cross-1" src={redCross} 
                    alt="red cross" />
                    
                    <img className="red-cross" id="basic-red-cross-2" src={redCross} 
                    alt="red cross" />

                    <div id="basic-subscription-description">
                    
                        <li>Access to all free products </li>
                    
                        <li>Access to store data of more than 7 days (Unlimited Days) </li>
                    
                        <li> Get 1 week trial of "Graphical Analysis" feature </li>
                    
                        <li> Full time access to all the features of <span className='bold'> "Graphical Analysis Dashboard" </span> </li>

                    <li> <span className='bold'> 24/7 </span> Customer Care Support </li>
                    
                    </div>

                </div>

                <div id="premium-subscription-card">
                    
                    <p id="premium-heading"> Premium </p>

                    <span className='horizontal-line'></span>
                    
                    <img className="green-tick" id="premium-green-tick-1" src={greenTick} alt="green tick" />
                    
                    <img className="green-tick" id="premium-green-tick-2" src={greenTick} alt="green tick" />
                    
                    <img className="green-tick" id="premium-green-tick-3" src={greenTick} 
                    alt="green tick" />
                    
                    <img className="green-tick" id="premium-green-tick-4" src={greenTick} alt="green tick" />
                    
                    <div id="premium-subscription-description">

                        <li>Access to <span className='bold'> all free products </span> </li>

                        <li>Access to store data of more than 7 days <span className='bold'> (Unlimited Days) </span> </li>
                        
                        <li> Full time access to all the features of <span className='bold'> "Graphical Analysis Dashboard" </span> </li>
                        
                        <li> <span className='bold'> 24/7 </span> Customer Care Support </li>
                    
                    </div>

                </div>

            </div>


        </div>
    </div>

  )
}

export default  Subscriptions