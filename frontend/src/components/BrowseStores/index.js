import { useSelector,  useDispatch } from 'react-redux';
import React, { useState, useEffect } from "react";
import { NavLink, Route, useParams } from 'react-router-dom';
// import '../../context/Modal.css';
import {getStores, createStore, editStore, destroyStore} from '../../store/store'

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


  return (
    <div>
        <h2>Stores</h2>
        <h2>{stores[0]?.title}</h2>
        <ul>
            {stores && stores.map(store=>(
                <li key={store.id}>{store.title}</li>
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

export default BrowseStores;
