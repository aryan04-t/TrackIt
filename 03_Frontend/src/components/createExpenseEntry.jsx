import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


import '../assets/css/createExpenseEntry.css'

function CreateExpenseEntry() {
  
  const [expenseName, setExpenseName] = useState(); 
  const [expenseAmount, setExpenseAmount] = useState(); 
  
  const navigate = useNavigate();
  
  const Submit = (e) =>{ 
    
    e.preventDefault();
    axios.post('http://localhost:3000/createExpenseEntry', {expenseName, expenseAmount})
    .then((res)=>{
      if(res.status === 200){
        navigate('/expenseTracker');
      }  
    })
    .catch(err => console.log(err)); 
    
  }
  
  
  return (
    
    
    <div id="expense-entry-container">

        <form id="expense-input-form" onSubmit={Submit}>

            <h1 id="expense-heading"> Add Expense </h1>
            
            <div className='input-row'>
                <label htmlFor="" > <span className='label-text'> Expense Description </span> </label>
                <input type='text' placeholder='Enter decription of expense' className='input-box' onChange = { (e) => setExpenseName(e.target.value) } /> 
            </div>
            
            <div className='input-row'>
                <label htmlFor="" > <span className='label-text'> Expense Amount </span> </label>
                <input type='text' placeholder='Enter amount of expense' className='input-box' onChange = { (e) => setExpenseAmount(e.target.value) } /> 
            </div>

            <button id="submit-button" type="submit" > Submit </button> 

        </form>

    </div>

  )
}

export default CreateExpenseEntry