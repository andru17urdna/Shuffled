import { useSelector,  useDispatch } from 'react-redux';
import React, { useState, useEffect } from "react";
import { NavLink, Route, useParams } from 'react-router-dom';
// import '../../context/Modal.css';
import {createCard, getCards, editCard, destroyCard} from '../../store/card.js'
import './BrowseCards.css';


function BrowseCards() {
  const dispatch = useDispatch();

//   const {params} = useParams();

const cards = useSelector((state) => {
  return state.card.list.map(cardId => state.card[cardId]);
});


    useEffect(() => {
        dispatch(getCards());
    }, []);

  const cardData =
  {

    "userId": 2,
    "storeId": 1,
    "name": "NOTTHOMAASSSSS",
    "imageUrl": "https://cdn.shopify.com/s/files/1/0956/5418/products/monarchs2_1024x1024.jpg?v=1583386901",
    "description": "After nearly a year of design and production, we invite you to experience Monarch Playing Cards. Monarch Playing Cards express elegance, clarity, and pride. \"Understated yet elegant. Like a Rolls Royce. Simply put, Monarchs define excellence. We've pioneered new and fascinating ways to push the limits and raise the bar. We utilized imported, heavyweight paper for a soft feel, yet sturdy composition. Gold foil surrounds the box design for maximum detail and visual impact.The gold metallic foil is vibrant, evoking a vintage, timeless aesthetic. The titling is embossed for pure and eloquent form. These playing cards, and the tuck case, are fit for a king. The cards are engineered with best materials and the highest standards. The cards are printed on Q1 quality stock with our signature Premium 909 Finish. Snakes twist around the evolution of sword and tree. Guiding the edges are the words \"de duobus malis, minus est semper eligenoum.\" The back design is truly a masterpiece.",
    "createdAt": "2021-07-19T22:37:54.889Z",
    "updatedAt": "2021-07-19T22:37:54.889Z"
}

const whateveryouwantdata =
  {
    "id": 13,
    "userId": 2,
    "storeId": 1,
    "name": "DOGFART",
    "imageUrl": "https://cdn.shopify.com/s/files/1/0956/5418/products/monarchs2_1024x1024.jpg?v=1583386901",
    "description": "After nearly a year of design and production, we invite you to experience Monarch Playing Cards. Monarch Playing Cards express elegance, clarity, and pride. \"Understated yet elegant. Like a Rolls Royce. Simply put, Monarchs define excellence. We've pioneered new and fascinating ways to push the limits and raise the bar. We utilized imported, heavyweight paper for a soft feel, yet sturdy composition. Gold foil surrounds the box design for maximum detail and visual impact.The gold metallic foil is vibrant, evoking a vintage, timeless aesthetic. The titling is embossed for pure and eloquent form. These playing cards, and the tuck case, are fit for a king. The cards are engineered with best materials and the highest standards. The cards are printed on Q1 quality stock with our signature Premium 909 Finish. Snakes twist around the evolution of sword and tree. Guiding the edges are the words \"de duobus malis, minus est semper eligenoum.\" The back design is truly a masterpiece.",
    "createdAt": "2021-07-19T22:37:54.889Z",
    "updatedAt": "2021-07-19T22:37:54.889Z"
}

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErrors([]);
//     return dispatch(sessionActions.login({ credential, password })).catch(
//       async (res) => {
//         const data = await res.json();
//         if (data && data.errors) setErrors(data.errors);
//       }
//     );
//   };

// const sortList = (wines) => {

//   wines.sort((a, b) => {
//     if (a.name > b.name) {
//       return 1;
//     }
//     if (a.name < b.name) {
//       return -1;
//     }
//     return 0;
//   });

//   return wines.map(wine => wine.id);
// };



function handlePut() {
  dispatch(editCard(whateveryouwantdata))
}

function handlePost() {
  dispatch(createCard(cardData))
}

function handleDelete() {
  dispatch(destroyCard(12))
}

if(!cards){
    return <div>Loading...</div>;
  }

  console.log(cards[0]?.Checkins);

  return (
    <div id='browsecard__div'>
            {cards && cards.map(card=>(
                <div className='card__container-div'>
                  <NavLink to={`/browsecards/${card.id}`} className='card__container-h2-div'>
                    <h2 className='card__h2'>{card.name}</h2>
                  </NavLink>
                  <div className='card_container-border-div'>
                  <img className='card__img' src={card?.imageUrl} alt='playing card image' />
                  <h3 className='card__h3'><NavLink className='card__h3--navlink' to={`/browse`}>{card.Store.title}</NavLink></h3>
                  <p className='card__description'>{card.description}</p>
                  <h4 className='card__comments--header'>Most Recent Comments:</h4>
                  <ul className='card__comments--ul'>
                    {card.Checkins.map(checkin => (
                        // console.log(checkin.comment)
                    <li key={checkin.id} className='card__comment-li'>{checkin.comment}</li>
                    ))}
                  </ul>
                </div>
              </div>
                // <li key={card.id}>{card.name}</li>
            ))}
        <div>
          <button onClick={handlePost}>Post</button>
          <button onClick={handlePut}>PUT</button>
          <button onClick={handleDelete}>DESTORY</button>
        </div>
    </div>
  );
}

export default BrowseCards;
