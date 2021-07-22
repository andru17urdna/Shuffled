import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './LocationBar.css';

function LocationBar({ location }) {
    return (
        <span id='location__bar--Container'>
            <h1 id='location__bar--h1'>{location}</h1>
        </span>
    )
}


export default LocationBar;
