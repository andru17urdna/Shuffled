import { useSelector,  useDispatch } from 'react-redux';
import React, { useState, useEffect } from "react";
import { NavLink, Route, useParams } from 'react-router-dom';
// import '../../context/Modal.css';
import {getStores} from '../../store/store'

function BrowseStores() {
  const dispatch = useDispatch();

//   const {params} = useParams();

const [stores] = useSelector(state => {
    return Object.values(state.stores)
  });

    useEffect(() => {
        dispatch(getStores());
    }, []);


    console.log(stores, 'stores')

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

if(!stores){
    return <div>Loading...</div>;
  }


  return (
    <div>
        <h2>Stores</h2>
        <h2>{stores[0].title}</h2>
        <ul>
            {stores.map(store=>(
                <li key={store.id}>{store.title}</li>
            ))}
        </ul>
    </div>
  );
}

export default BrowseStores;
