import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

import '../assets/css/editExpenseEntry.css' 
import '../assets/css/createExpenseEntry.css' 

function EditExpenseEntry() {


  const {id} = useParams();


  const [expenseName, setExpenseName] = useState(''); 
  const [expenseAmount, setExpenseAmount] = useState(''); 
  
  const navigate = useNavigate();
  
  
  useEffect( () => {

    let email = localStorage.getItem('email');
    let isLoggedIn = localStorage.getItem('isLoggedIn');

    if(isLoggedIn === 'true'){

      axios.get(`http://localhost:3000/getOneExpenseEntry/${id}/${email}/${isLoggedIn}`)
      .then( (res) => { 
        setExpenseName(res.data.singleEntry.expenseName); 
        setExpenseAmount(res.data.singleEntry.expenseAmount); 
      })
      .catch( (err) => {
        console.log(err);
      })

    }
    else{
      navigate('/signup');
    }

  }, []);



  const editSubmit = (e) =>{ 
    
    e.preventDefault();

    let email = localStorage.getItem('email');
    let isLoggedIn = localStorage.getItem('isLoggedIn');

    if(isLoggedIn === 'true'){

      axios.put(`http://localhost:3000/editExpenseEntry/${id}/${email}/${isLoggedIn}`, {expenseName, expenseAmount})
      .then( (res) => {
        if(res.status === 200){
          navigate('/expenseTracker'); 
        }
      })
      .catch(err => console.log(err));

    }
    else{
      navigate('/signup'); 
    }

  }

  return (

    <div id="expense-entry-container">

        <form id="expense-input-form" onSubmit={editSubmit}>

            <h1 id="expense-heading"> Edit Expense </h1>
            
            <div className='edit-input-row'>
                <label htmlFor="" > <span className='label-text'> Expense Description </span> </label>
                <input type='text' placeholder='Enter new decription of expense here' className='edit-input-box' value={expenseName} onChange = { (e) => setExpenseName(e.target.value) } /> 
            </div>
            
            <div className='edit-input-row'>
                <label htmlFor="" > <span className='label-text'> Expense Amount </span> </label>
                <input type='text' placeholder='Enter amount of expense' className='edit-input-box' value={expenseAmount} onChange = { (e) => setExpenseAmount(e.target.value) }  /> 
            </div>

            <button id="submit-button" type="submit"> Submit </button>
        </form>

    </div>


  )
}

export default EditExpenseEntry