import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (<ul className='nav'>
         <li className='nav-item'>
            <Link className='nav-link' to="/home"> Home</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link' to="/about"> About</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link' to="/contact"> ContactUs</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link' to="/List"> Customer List</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link' to="/async"> Async State</Link>
        </li>
    </ul>);
}

export default Navbar;

