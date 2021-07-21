import { useSelector,  useDispatch } from 'react-redux';
import React, { useState, useEffect } from "react";
import { NavLink, Route, useParams } from 'react-router-dom';
// import '../../context/Modal.css';
import {getCards} from '../../store/card.js'

function BrowseCards() {
  const dispatch = useDispatch();

//   const {params} = useParams();

const [cards] = useSelector(state => {
    return Object.values(state.card)
  });

    useEffect(() => {
        dispatch(getCards());
    }, []);


    console.log(cards[0], 'CARDS')

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

if(!cards){
    return <div>Loading...</div>;
  }


  return (
    <div>
        <h2>wfgsfgsfghatup</h2>
        <h2>{cards[0].name}</h2>
        <ul>
            {cards.map(card=>(
                <li key={card.id}>{card.name}</li>
            ))}
        </ul>
    </div>
  );
}

export default BrowseCards;
