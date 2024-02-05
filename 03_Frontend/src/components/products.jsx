import React from 'react'

import Navbar from './navbar.jsx'; 


import notebookIcon from '../assets/vectors/productIcons/notebookIcon.svg'
import caloriesIcon from '../assets/vectors/productIcons/caloriesIcon.svg'
import birthdayIcon from '../assets/vectors/productIcons/birthdayIcon.svg'
import budgetIcon from '../assets/vectors/productIcons/budgetIcon.svg'


import '../assets/css/products.css';


function products() {

    return (
      
      
    <div id="products">
        

        <div id="products-container">

            <Navbar /> 
            
            <div id="product-icons-div" className='user-select-none'>

                <div id="zero" className="product-icon-container">

                    <div id="zero-zero" className="product-icon-background spacing-icon-divs blue-box-shadow" >
                        <img src={notebookIcon} alt="notepad-icon" />
                    </div>

                    <div id="zero-one" className="product-icon-background green-box-shadow" >
                        <img src={caloriesIcon} alt="kcal-tracker-icon" />
                    </div>

                </div>
                
                <div id="one" className="product-icon-container">

                    <div id="one-zero" className="product-icon-background spacing-icon-divs yellow-box-shadow" > 
                        <img src={birthdayIcon} alt="birthday-and-anniversary-reminder-icon" />
                    </div> 

                    <div id="one-one" className="product-icon-background red-box-shadow" > 
                        <img src={budgetIcon} alt="expense-tracker-icon" />
                    </div> 

                </div>

            </div>
        
        </div>


    </div>
  
  )
}

export default products;