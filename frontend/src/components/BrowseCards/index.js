import { useSelector,  useDispatch } from 'react-redux';
import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
// import '../../context/Modal.css';
import { getStores } from '../../store/store';
import { getCheckins } from '../../store/checkin';
import {createCard, getCards, editCard, getOneCard, destroyCard} from '../../store/card.js'
import CreateCheckinForm from '../Checkins/AddCheckin';
import './BrowseCards.css';

function BrowseCards() {
  const dispatch = useDispatch();

//   const {params} = useParams();

const cards = useSelector((state) => {
  return state.card.list.map(cardId => state.card[cardId]);
});


    useEffect(() => {
      dispatch(getCards());
      dispatch(getStores());
      dispatch(getCheckins());
    }, []);



if(!cards){
    return <div>Loading...</div>;
  }


  return (
    <div className='background--div'>
    <div>
      <h1 id='location__bar--Container'>CARDS</h1>
    </div>
    <div id='browsecard__div'>
            {cards && cards.map(card=>(
                <div className='card__container-div'>
                  <NavLink to={`/onecard/${card.id}`} className='card__container-h2-div'>
                    <h2 className='card__h2'>{card.name}</h2>
                  </NavLink>
                  <div className='card_container-border-div'>
                  <NavLink to={`/onecard/${card.id}`} className='card__image-navlink'>
                    <img className='card__img' src={card?.imageUrl} alt='playing card image' />
                  </NavLink>
                  <h3 className='card__h3'><NavLink className='card__h3--navlink' to={`/`}>{card.Store?.title}</NavLink></h3>
                  <p className='card__description'>{card?.description}</p>
                  <h4 className='card__comments--header'>Comments:</h4>
                  <ul className='card__comments--ul'>
                    {card?.Checkins && card?.Checkins.map(checkin => (
                    <li key={checkin?.id} className='card__comment-li'>{checkin?.comment}</li>
                    )).reverse()}
                  </ul>
                </div>
              </div>
            ))}

    </div>
  </div>
  );
}

export default BrowseCards;
