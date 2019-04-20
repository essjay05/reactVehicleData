import React from 'react';
import Navbar from './Navbar';

export default ({ children }) => (
    <main>
        <Navbar />
        <div className="container">
            { children }
        </div>
    </main>
)
