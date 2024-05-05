import React from 'react'

import Navbar from './navbar'

import '../assets/css/guide.css'


function Guide() {
  return (
    <div> 

      <Navbar /> 
      
      <div id="guide-container user-select-none">

        <div id="content-div-0" className='guide-content-container box-shadow-pink'> 
        
          <div id="heading-0-0" className='font-size-30 heading-margin'>
            TrackIt - User Guide: 
          </div>
        
          <div id="content-0-1" className='font-size-18'> 
            Welcome to TrackIt, your <span className='bold'> "all-in-one solution" </span> for managing your <span className='bold'> health, finances, and personal reminders. </span> This guide will walk you through the four interfaces of TrackIt and help you make the most out of each feature.
          </div>
          
        </div> 
    

        <div id="content-div-1" className='guide-content-container box-shadow-yellow'>

          <div id="heading-1-0" className='font-size-30 heading-margin'> 1. Calories and Macros Tracker: </div>

          <div id="content-1-1" className='font-size-18'>

            Track your nutrition <span className=''bold> effortlessly </span> with the <span className='bold'> "Calories and Macros Tracker". </span> Here's how to use it: 

            <ul className='ul-padding-responsive'>
              <li> <span className='bold'> </span>Log Your Meals: </li>
              <ol type='i' className='ol-padding-responsive'>
                <li> Navigate to the "Calories and Macros" section. </li>
                <li> Click on "Log Meal" to record what you've eaten. </li>
                <li> Enter details like food items, quantity, and meal type. </li>
              </ol>
            </ul>
            
            <ul className='ul-padding-responsive'>
              <li> View Your Stats: </li>
              <ol type='i' className='ol-padding-responsive'>
                <li> Check your daily, weekly, or monthly calorie intake. </li>
                <li> Monitor your macronutrient distribution. </li>
              </ol>
            </ul>

          </div>

        </div>




      </div>

    </div>
  )
}

export default Guide 