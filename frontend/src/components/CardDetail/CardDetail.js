import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useParams, NavLink, Link } from 'react-router-dom';
import { createCard, getOneCard, editCard, destroyCard } from '../../store/card';
import CreateCheckinForm from '../Checkins/AddCheckin';
import EditCardForm from '../CardDetail/CardEditForm.js';
import { getCheckins } from '../../store/checkin';
import EditCheckinForm from '../Checkins/EditCheckinForm';
import './CardDetail.css'




const CardDetail = () => {
    const dispatch = useDispatch();
    const cardId = useParams();

    const [showCreationButtons, setShowCreationButtons] = useState(false);


    const matchingCheckinsArr = useSelector((state) => {
        return state.checkins.list.filter(checkinId => {
        return state.checkins[checkinId].deckId === +cardId.id
           }
        );
      });


      const checkins = useSelector((state) => {
        return matchingCheckinsArr.map(checkinId => state.checkins[checkinId]);
      });



    useEffect(()=>{
        if (sessionUser?.id === card?.userId) {
            setShowCreationButtons(true);
        }
    })


    const card = useSelector((state)=> {
        return state.card[+cardId.id]
    });

    const sessionUser = useSelector(state => {
        return state.session.user
    });


    return (
        <div className='background__container--div'>
            <div className='carddetail__h2--animation-div'>
                <h2 className='carddetail__h2--animation'>{card?.name}</h2>
            </div>
            <div className='location__bar--Container-card'>
            <h1 className='location__bar--h1-card'>CARD</h1>
            </div>
            <div className='carddetail__container--div'>
                <div className='carddetail__border--div'></div>

            <h2 className='carddetail__h2'>{card?.name}</h2>
            <div className='carddetail__img--div'>
                <img className='carddetail__img' src={card?.imageUrl}></img>
            </div>
            <div className='carddetail__store-h3--div'>
                <a className='carddetail__h3--a' href={card?.Store?.address}>
                    <h3 className='carddetail__h3'>{card?.Store?.title}</h3>
                </a>
            </div>
            <div className='carddetail__h3-username--div'>
                <h3 className='carddetail__h3-username'>{card?.User?.username}</h3>
            </div>
            <div className='carddetail__p-description--div'>
            <p className='carddetail__p'>{card?.description}</p>
            </div>
                <div className='carddetail__ul--div'>
                    <div className='carddetail__ul' >
                        {checkins && checkins.map(checkin => (
                            <div key={checkin?.id}>
                                <p className='carddetail__li' key={checkin?.id} className='card__comment-li'>{checkin?.comment}</p>
                                <EditCheckinForm checkin={checkin}/>
                            </div>
                                ))}
                    </div>
                </div>
                    <div className="addcomment-button">
                        <Link exact to={`add-check-ins/${card?.id}`}>WORD</Link>
                    </div>
        {showCreationButtons && (
            <div className='carddetail__editcardform--div'>
                <EditCardForm card={card}/>
            </div>
            )}
            <div>

            </div>
            </div>
        </div>
    )
}

export default CardDetail;
