import { useSelector,  useDispatch } from 'react-redux';
import React, { useState, useEffect } from "react";
import { NavLink, Route, useParams } from 'react-router-dom';
import shuffledLogo from '../Landing Page/SHUFFLED outline.png';
import './LandingPage.css';

function LandingPage() {



    return(
        <div className='homepage__container--div'>
            <div className='homepage__logo--div'>
                <img className='homepage__logo--img' src= {shuffledLogo}></img>
            </div>
            <div className='div1'>
                <div className='div2'>

                </div>
            </div>
        </div>
    )

}

export default LandingPage;
