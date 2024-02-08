import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

import '../assets/css/expenseTracker.css'

import Navbar from './navbar.jsx'



function ExpenseTracker() {

  const [expenseHistory, setExpenseHistory] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:3000/getAllExpenseHistory')
      .then((res) => {
        setExpenseHistory(res.data.entry);
      })
      .catch((err) => console.log(err));

  }, [])

  const deleteEntry = (id) => {
    
    axios.delete('http://localhost:3000/deleteExpenseEntry/' + id)
    .then( (res) => {
      if(res.status === 200){
        window.location.reload();
      }
    })
    .catch( (err) => {
      console.log(err); 
    });
  }


  return (

    <>

      <Navbar />

      <div id="expense-tracker-ui-contianer">

        <Link to="/createExpenseEntry">
          <button id="add-button"> Add </button>
        </Link>

        <table>

          <thead>

            <tr>
              <th> Expense Name </th>
              <th> Expense Amount </th>
              <th> Action </th>
            </tr>

          </thead>

          {expenseHistory !== undefined ? (
            <tbody>
              {expenseHistory.map((oneEntry, key) => {
                return (
                  <tr key={key}>
                    <td> {oneEntry.expenseName} </td>
                    <td> {oneEntry.expenseAmount} </td>
                    <td>
                      <Link to={`/editExpenseEntry/${oneEntry._id}`}>
                        <button className="edit-button"> Edit </button>
                      </Link>
                      <button className="delete-button" onClick={ (e) => deleteEntry(oneEntry._id) }> Delete </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : null}

        </table>

      </div>

    </>

  )
}

export default ExpenseTracker