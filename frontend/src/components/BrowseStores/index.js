import { useSelector,  useDispatch } from 'react-redux';
import React, { useState, useEffect } from "react";
import { NavLink, Route, useParams } from 'react-router-dom';
// import '../../context/Modal.css';
import {getStores, createStore, editStore, destroyStore} from '../../store/store';
import './BrowseStores.css'
import SlideShow from '../SlideShow/SlideShow';

function BrowseStores() {
  const dispatch = useDispatch();

//   const {params} = useParams();

const stores = useSelector((state) => {
  return state.stores.list.map(storeId => state.stores[storeId]);
});


    useEffect(() => {
        dispatch(getStores());
    }, []);



    const storeData ={

        "ownerId": 10,
        "title": "did you know",
        "address": "you can cry blood",
        "createdAt": "2021-07-19T22:37:54.871Z",
        "updatedAt": "2021-07-19T22:37:54.871Z"


    }

    const moreStoreData = {
      "id": 20,
      "ownerId": 10,
      "title": "BOOetgrrgg",
      "address": "nwewewfweeeweewo",
      "createdAt": "2021-07-19T22:37:54.871Z",
      "updatedAt": "2021-07-19T22:37:54.871Z"
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
  dispatch(editStore(moreStoreData))
}

function handlePost() {
  dispatch(createStore(storeData))
}

function handleDelete() {
  dispatch(destroyStore(20))
}

if(!stores){
    return <div>Loading...</div>;
  }

  console.log(stores, '<-------stores-----------');

  return (
    <div className='browsestore__div'>
      {stores && stores.map(store => (
        <div key={store.id} className='store__container--div'>
          <div className='store__header--div'>
          <h2 className='store__h2-1'>{store.title}</h2>
          <h2 className='store__h2-2'>{store.title}</h2>
          </div>
          <div className='store__container--border-div'>
          </div>
            <h3 className='store__username--h3'><NavLink to={`userprofile/${store.User.id}`}>{store.User.username}</NavLink></h3>
              <a className='store__address--h3' href={store.address}>{store.title}</a>
            <SlideShow cards={store.Cards} />
        </div>
      ))}
    <div>
          <button onClick={handlePost}>Post</button>
          <button onClick={handlePut}>PUT</button>
          <button onClick={handleDelete}>DESTORY</button>
      </div>
    </div>
  );
}

export default BrowseStores;
