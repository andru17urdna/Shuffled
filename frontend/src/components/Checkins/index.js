import { useSelector,  useDispatch } from 'react-redux';
import React, { useState, useEffect } from "react";
import { NavLink, Route, useParams } from 'react-router-dom';
// import '../../context/Modal.css';
import {getCheckins, editCheckin, destroyCheckin, createCheckins} from '../../store/checkin'

function Checkins() {
  const dispatch = useDispatch();

//   const {params} = useParams();

const checkins = useSelector((state) => {

  return state.checkins.list.map(checkinId => state.checkins[checkinId]);
});

    useEffect(() => {
        dispatch(getCheckins());
    }, []);

const commentData = {
    "userId": 3,
    "deckId": 1,
    "comment": "I like to eat playing cards",
    "createdAt": "2021-07-19T22:37:54.905Z",
    "updatedAt": "2021-07-19T22:37:54.905Z"


}

const editCommentData = {
    "id": 20,
    "userId": 3,
    "deckId": 1,
    "comment": "Sometimes I kiss my wife while she is sleeping. <3",
    "createdAt": "2021-07-19T22:37:54.905Z",
    "updatedAt": "2021-07-19T22:37:54.905Z"


}


function handlePut() {
  dispatch(editCheckin(editCommentData))
}

function handlePost() {
  dispatch(createCheckins(commentData))
}

function handleDelete() {
  dispatch(destroyCheckin(20))
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

if(!checkins){
    return <div>Loading...</div>;
  }

  console.log(checkins);
  return (
    <div>
         <div>
          <button onClick={handlePost}>Post</button>
          <button onClick={handlePut}>PUT</button>
          <button onClick={handleDelete}>DESTORY</button>
        </div>
        <h2>wfgsfgsfghatup</h2>
        <h2>{checkins[0]?.comment}</h2>
        <ul>
            {checkins && checkins.map(comment=>(
                <li key={comment.id}>{comment.comment}</li>
            ))}
        </ul>

    </div>
  );
}

export default Checkins;
