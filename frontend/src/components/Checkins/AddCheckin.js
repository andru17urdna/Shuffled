import { useSelector,  useDispatch } from 'react-redux';
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { NavLink, useParams } from 'react-router-dom';
import { getCheckins } from '../../store/checkin';
import { editCheckin, destroyCheckin, createCheckins, getOneDeckCheckins } from '../../store/checkin';


    const CreateCheckinForm = () => {

       const cardId = useParams();
        


    const dispatch = useDispatch();
    const history = useHistory();


    const [comment, setComment] =useState ();
    const [errors, setErrors] = useState([]);

    const sessionUser = useSelector((state) => state.session.user)
    const updateComment = (e) => setComment(e.target.value);

    // useEffect(() => {
    //     dispatch(getOneDeckCheckins(cardId))
    // }, [])




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
                } else {
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

export default CreateCheckinForm;
