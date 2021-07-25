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
