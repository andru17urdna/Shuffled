import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
import { useDispatch } from 'react-redux';


function SlideShow({ cards }){
    const [slideIdx, setSlideIdx] = useState(0);


    useEffect(() => {
        console.log(cards, '<<<<<<<<<+++++++Cards')
        // const img = ReactDOM.findDOMNode('image__navlink');
        const images = document.getElementsByClassName('image__navlink');
        // setSlideIdx((prevState) => prevState + 1 )

        if (slideIdx > cards.length) {setSlideIdx(1)};
        if (slideIdx < 1) {setSlideIdx(images.length)};
        console.log(slideIdx)
        // images.map(image =>{
        //     image.style.display = 'none';
        // })
        // images[slideIdx-1].style.display='block';

    }, [slideIdx])


    return(
        <div className='slideshow__container'>
            {cards && cards.map(cardPack =>(
                <div className='imageinfo__container--div'>
                <h4 className='image__name--h4'>{cardPack.name}</h4>
                {/* <NavLink className='image__navlink' to={`browsecards/${cardPack.id}`}></NavLink> */}
                    <img className='image__navlink' onClick={() => setSlideIdx((prevState) => prevState + 1 )} className='store__card--img' src={cardPack?.imageUrl} alt='playing card image'></img>
                {/* </NavLink> */}
                </div>
            ))}
        </div>
    )
};

export default SlideShow;
