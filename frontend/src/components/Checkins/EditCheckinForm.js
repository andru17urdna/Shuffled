import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {editCheckin, destroyCheckin, getCheckins} from '../../store/checkin';


const EditCheckinForm =({ checkin }) =>{


    const dispatch = useDispatch();
    const history = useHistory();

    const [comment, setComment] =useState ();
    const [errors, setErrors] = useState([]);
    const [showEditDelete, setShowEditDelete] = useState(false);


    const editComment = (e) => setComment(e.target.value);
    const sessionUser = useSelector((state) => state.session.user);

    const  updateCheckin = async (e) =>{
        e.preventDefault();

        const editedComment = {
            id: checkin.id,
            userId: sessionUser?.id,
            deckId: checkin.deckId,
            comment
        }

        if (editedComment) {
            const checkinInfo = await dispatch(editCheckin(editedComment))
              if (checkinInfo && checkinInfo.errors) {
                setErrors(checkinInfo.errors)
              } else {
                // history.push(`/browsecards`);
              }
          }
        };

        useEffect(()=> {
            if(sessionUser?.id === checkin.userId){
                setShowEditDelete(true);
            }
        })



        function deleteCheckin() {
            dispatch(destroyCheckin(checkin.id))
            // history.push(`/browsecards`);
            }

            if(showEditDelete){

            return (
                <section>
                    <form className='edit-form'>

                          {!!errors.length &&(<div id='error_ul-container-div'>
                              <ul id='signup__errors'>
                              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                              </ul>
                          </div>)}
                          <input
                                className='edit-input'
                              type="text"
                              placeholder="Edit above comment"
                              min="0"
                              max="500"
                              required
                              value={comment}
                              onChange={editComment} />
                      <div>
                          <button class='edit-buttons' onClick={updateCheckin}>🔍</button>
                          <button class='edit-buttons' onClick={deleteCheckin}>⌫</button>
                      </div>
                    </form>
                </section>
            )

        } else{
            return null;
        }


}

export default EditCheckinForm;
