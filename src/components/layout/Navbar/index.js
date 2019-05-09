import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default () => (
    <nav>
        <div>
            <Link to="/">Home</Link>
        </div>
        <div>
            <Link to="/vehicles">Vehicle List</Link>
            <Link to="/search">Search</Link>
            <Link to="/autocomplete">Filter List</Link>
        </div>
    </nav>
)