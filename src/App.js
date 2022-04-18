import React from 'react';
import Navbar from './components/Navbar';
import { Outlet, useOutlet }  from 'react-router-dom';

export default function App() {
    const outlet = useOutlet();

    return (
        <div>
            <Navbar />
            <div className="container ">
                <Outlet  />
            </div>
        </div>
    );
}


