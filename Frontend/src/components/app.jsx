import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './home.jsx';
import Products from './products.jsx';
import Subscriptions from './subscriptions.jsx';
import ExpenseTracker from './expenseTracker.jsx';
import CreateExpenseEntry from './createExpenseEntry.jsx';
import EditExpenseEntry from './editExpenseEntry.jsx';
import Notepad from './notepad.jsx';
import CreateNotepad from './createNotepad.jsx';
import Login from './login.jsx';
import SignUp from './signUp.jsx';
import Guide from './guide.jsx'; 


ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        
        <BrowserRouter>

            <Routes>

                <Route path="/signUp" element={<SignUp />} /> 
                <Route path="/login" element={<Login />} /> 


                <Route path="/" element={<Home />} /> 
                <Route path="/home" element={<Home />} /> 
                <Route path="/products" element={<Products />} /> 
                <Route path="/subscriptions" element={<Subscriptions />} /> 
                <Route path="/guide" element={<Guide />} /> 
                <Route path="/expenseTracker" element={<ExpenseTracker />} /> 
                <Route path="/createExpenseEntry" element={<CreateExpenseEntry />} /> 
                <Route path="/editExpenseEntry/:id" element={<EditExpenseEntry />} /> 
                <Route path="/notepad" element={<Notepad />} />
                <Route path="/createNotepad" element={<CreateNotepad />} />

            </Routes>
            
        </BrowserRouter>

    </React.StrictMode>

);