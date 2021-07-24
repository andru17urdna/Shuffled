import { useSelector,  useDispatch } from 'react-redux';
import React, { useState, useEffect } from "react";
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';
// import '../../context/Modal.css';
import {getCheckins, editCheckin, destroyCheckin, createCheckins} from '../../store/checkin';
import './Checkin.css';

function Checkins() {
    const history= useHistory();
    const {cardId} = useParams();
    console.log(cardId)
    const dispatch = useDispatch();


  const [comment, setComment] = useState ();
  const [errors, setErrors] = useState([]);

const checkins = useSelector((state) => {
  return state.checkins.list.map(checkinId => state.checkins[checkinId]);
});

const sessionUser = useSelector((state) => state.session.user)

const updateComment = (e) => setComment(e.target.value);

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

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const newComment = {
        userId: sessionUser?.id,
        deckId: +cardId,
        comment
    }

    if (newComment) {
        const createdComment = await dispatch(createCheckins(newComment))
            if(createdComment && createdComment.errors) {
                setErrors(createdComment.errors)
                console.log(createdComment.errors)
            } else {
                console.log('PASSED')
                history.push(`/browsecards`);
            }

        }

}

  return (
      <section>
          <form onSubmit={handleSubmit}>
                <div id='error_ul-container-div'>
                    <ul id='signup__errors'>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                </div>
            <div>
                <input
                    type="text"
                    placeholder="Comment Limit 500 Characters"
                    min="0"
                    max="500"
                    required
                    value={comment}
                    onChange={updateComment} />
            </div>
            <div>
                <button onClick={handleSubmit}>Add Comment</button>
            </div>
          </form>
      </section>
  )
}

export default Checkins;
