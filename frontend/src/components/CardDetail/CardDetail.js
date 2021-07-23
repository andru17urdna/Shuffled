import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { createCard, getOneCard, editCard, destroyCard } from '../../store/card';
import EditCardForm from '../CardDetail/CardEditForm.js';
import './CardDetail.css'



const CardDetail = () => {
    const dispatch = useDispatch();
    const cardId = useParams();

    console.log(+cardId.id, 'card id')
    useEffect(() => {
        dispatch(getOneCard(+cardId.id))
    },[]);




    // console.log(cardId, "HERHE I AMMAMAM")

    const cardState = useSelector((state)=> {
        return state
    });

    const sessionUser = useSelector(state => {

        return state.session.user
      });

      console.log(sessionUser)


    const card = cardState.card;

    console.log(card, 'CARD HERE')





    return (
        <div className='background__container-div'>
            <h2>{card.name}</h2>
            <div>
                <img src={card?.imageUrl}></img>
            </div>
            <div>
                <h3>{card.Store?.title}</h3>
            </div>
            <div>
                <h2>{card.Store?.address}</h2>
            </div>
            <div>
                <h3>{card.User?.username}</h3>
            </div>
            <div>
            <p>{card.description}</p>
            </div>
            <div>
                <div>
                    <ul>
                    {card.Checkins && card.Checkins.map(checkin => (
                            <li key={checkin.id} className='card__comment-li'>{checkin.comment}</li>
                            ))}
                    </ul>
                </div>
            </div>
                <EditCardForm card={card}/>
            <div>
            </div>
        </div>
    )
}

export default CardDetail;
