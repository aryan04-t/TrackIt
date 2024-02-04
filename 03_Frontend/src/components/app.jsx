import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './home.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />;
                <Route path="/home" element={<Home />} />;

            </Routes>
            
        </BrowserRouter>

    </React.StrictMode>

);