import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './02_Navbar.jsx';

import '../css/01_App.css'


function App() {

    return (

        <BrowserRouter>
            <Routes>
    
                <Route path="/" element={<Navbar />} /> 
            
            </Routes>
        </BrowserRouter>

    )
}

export default App 