import { useSelector,  useDispatch } from 'react-redux';
import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { getCheckins } from '../../store/checkin';
import { editCheckin, destroyCheckin, createCheckins } from '../../store/checkin';


function CreateCheckinForm({cardId}) {
    console.log(cardId, 'this sis sisisisisis')
    const dispatch = useDispatch();


    const [comment, setComment] =useState ();
    const [errors, setErrors] = useState([]);
    // const [] =useState ();
    console.log(comment)

    const sessionUser = useSelector((state) => state.session.user)
    const updateComment = (e) => setComment(e.target.value);




    const handleSubmit = async (e) =>{
        e.preventDefault();

        const newComment = {
            userId: sessionUser?.id,
            deckId: cardId,
            comment
        }
        if (newComment) {
            const createdComment = await dispatch(createCheckins(newComment))
                if(createdComment && createdComment.errors) {
                    setErrors(createdComment.errors)
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

export default CreateCheckinForm;
