import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route, } from "react-router-dom";
import App from './App';
import Ranks from './pages/ranks';
import Classes from './pages/classes';
import Members from './pages/members';
import Home from './pages/home';

// ========================================
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement)
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route index element={<Home />} />
                <Route path="ranks" element={<Ranks />} />
                <Route path="classes" element={<Classes />} />
                <Route path="members" element={<Members />} />
                <Route path="home" element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter>
    );

