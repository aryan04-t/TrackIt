import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './home.jsx';
import Products from './products.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />; 
                <Route path="/home" element={<Home />} />; 
                <Route path="/products" element={<Products />} />; 

            </Routes>
            
        </BrowserRouter>

    </React.StrictMode>

);