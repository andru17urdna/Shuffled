import { useSelector,  useDispatch } from 'react-redux';
import React, { useState, useEffect } from "react";
import { NavLink, Route, useParams } from 'react-router-dom';
import shuffledLogo from '../Landing Page/SHUFFLED Finished.png';
import { getCards } from '../../store/card';
import { getStores } from '../../store/store';
import { getCheckins } from '../../store/checkin';

import './LandingPage.css';

function LandingPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCards());
        dispatch(getStores());
        dispatch(getCheckins());
    }, []);



    return(
        <div className='homepage__container--div'>
            <div className='homepage__logo--div floating'>
                <img className='homepage__logo--img' src= {shuffledLogo}></img>
            </div>
            <div className='div1 onload'>
                <h2 className='homepage__intro'>Join a growing cardistry community of 1 member</h2>
            </div>
            <div className='div2 onload'>
                <div className='div-border-div'></div>
                <h3 className='homepage-h3'>Add your favorite <span style={{color: '#ffd349'}}>Cards</span></h3>
                <p className='homepage-p'>Display your favorite cards from your personal collection</p>
            </div>
            <div className='div3 onload'>
                <div className='div-border-div'></div>
                <h3 className='homepage-h3'><span style={{color: '#ffd349'}}>Comment</span> and <span style={{color: '#ffd349'}}>Review</span></h3>
                <p className='homepage-p'>Let people know how you really feel about their cards, by commenting and reviewing</p>
            </div>
            <div className='div4 onload'>
                <a className='homepage-a' href='https://www.instagram.com/kirakajeevan/'>Logo</a>
                <p id='linkdescriptor'>Check out the artists</p>
                <a className='homepage-a' href='https://unsplash.com/@anniespratt'>Background</a>
            </div>
        </div>
    )

}

export default LandingPage;
