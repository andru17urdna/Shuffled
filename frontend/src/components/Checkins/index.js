import { useSelector,  useDispatch } from 'react-redux';
import React, { useState, useEffect } from "react";
import { NavLink, Route, useParams } from 'react-router-dom';
// import '../../context/Modal.css';
import {getCheckins} from '../../store/checkin'

function Checkins() {
  const dispatch = useDispatch();

//   const {params} = useParams();

const [checkins] = useSelector(state => {
    return Object.values(state.checkins)
  });

    useEffect(() => {
        dispatch(getCheckins());
    }, []);


   

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

if(!checkins){
    return <div>Loading...</div>;
  }


  return (
    <div>
        <h2>wfgsfgsfghatup</h2>
        <h2>{checkins[0].comment}</h2>
        <ul>
            {checkins.map(comment=>(
                <li key={comment.id}>{comment.comment}</li>
            ))}
        </ul>
    </div>
  );
}

export default Checkins;
