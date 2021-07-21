import { useSelector,  useDispatch } from 'react-redux';
import React, { useState, useEffect } from "react";
import { NavLink, Route, useParams } from 'react-router-dom';
// import '../../context/Modal.css';
import {createCard, getCards, editCard, destroyCard} from '../../store/card.js'

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


  return (
    <div>
        <h2>wfgsfgsfghatup</h2>
        <h2>{cards[0]?.name}</h2>
        <ul>
            {cards && cards.map(card=>(
                <li key={card.id}>{card.name}</li>
            ))}
        </ul>
        <div>
          <button onClick={handlePost}>Post</button>
          <button onClick={handlePut}>PUT</button>
          <button onClick={handleDelete}>DESTORY</button>
        </div>
    </div>
  );
}

export default BrowseCards;
