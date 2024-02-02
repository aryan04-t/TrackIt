import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './navbar.jsx';
import Footer from './footer.jsx';
import Home from './home.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        
        <BrowserRouter>

            <Navbar /> 

            <Routes>

                <Route path="/home" element={<Home />} />;

            </Routes>

            <Footer />

        </BrowserRouter>

    </React.StrictMode>

);