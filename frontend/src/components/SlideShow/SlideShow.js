import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';


function SlideShow({ info }){
    const [slideIdx, setSlideIdx] = useState(0);
    const [,]

    const images = querySelectorAll('.image__navlink')

    useEffect(() => {
        setSlideIdx((prevState) => prevState + 1 )
        const images = querySelectorAll

        if (slideIdx > images.length) {setSlideIdx(1)}

    },[idx])


    return(
        <div className='slideshow__container'>
            {store.Cards.map(cardPack =>(
                <div className='imageinfo__container--div'>
                <h4 className='image__name--h4'>{cardPack.name}</h4>
                <NavLink className='image__navlink' to={`browsecards/${cardPack.id}`}><img className='store__card--img' src={cardPack?.imageUrl} alt='playing card image'></img></NavLink>
                </div>
            ))}
        </div>
    )
}
