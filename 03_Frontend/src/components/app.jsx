import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './home.jsx';
import Products from './products.jsx';
import Subscriptions from './subscriptions.jsx';
import ExpenseTracker from './expenseTracker.jsx';
import CreateExpenseEntry from './createExpenseEntry.jsx';
import EditExpenseEntry from './editExpenseEntry.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} /> 
                <Route path="/home" element={<Home />} /> 
                <Route path="/products" element={<Products />} /> 
                <Route path="/subscriptions" element={<Subscriptions />} /> 
                <Route path="/expenseTracker" element={<ExpenseTracker />} /> 
                <Route path="/createExpenseEntry" element={<CreateExpenseEntry />} /> 
                <Route path="/editExpenseEntry/:id" element={<EditExpenseEntry />} /> 

            </Routes>
            
        </BrowserRouter>

    </React.StrictMode>

);