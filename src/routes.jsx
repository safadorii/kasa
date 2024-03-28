
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About'
import Error from './pages/error';
import Home from './pages/Home';
import Housing from './pages/logements';

const IndexRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/housing/:id" element={<Housing />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default IndexRoutes;