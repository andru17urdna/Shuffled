import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editCard, destroyCard } from '../../store/card';

const EditCardForm = ({card}) => {

const dispatch = useDispatch();
const history = useHistory();

const [name, setName] = useState(card.name);
const [imageUrl, setImageUrl] = useState(card.imageUrl);
const [description, setDescription] = useState(card.description);
const [errors, setErrors] = useState([]);

const updateName = (e) => setName(e.target.value);
const updateImageUrl = (e) => setImageUrl(e.target.value);
const updateDescription = (e) => setDescription(e.target.value);
const sessionUser = useSelector((state) => state.session.user);


const updateCard = async (e) => {
    e.preventDefault();

    const editCardDeck = {
        id: card.id,
      userId :sessionUser.id,
      storeId :card.storeId,
      name,
      imageUrl,
      description
    };
      console.log(card, 'EDITED CARD')
    if (editCardDeck) {
      const cardInfo = await dispatch(editCard(editCardDeck))
        if (cardInfo && cardInfo.errors) {
          setErrors(cardInfo.errors)
        } else {
          // ${createdCardDeck.id}
          history.push(`/browsecards`);
          // hideForm();
        }
    }
  };


function deleteCard() {
    dispatch(destroyCard(card.id))
    history.push(`/browsecards`);
}


  const handleCancelClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="new-form-holder centered middled">
      <form>
      <div id='error_ul-container-div'>
        <ul id='signup__errors'>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
      </div>
        <input
          type="text"
          min="4"
          required
          placeholder={card.name}
          value={name}
          onChange={updateName} />
        <input
          type="text"
          min="0"
          max="500"
          required
          placeholder="Description"
          value={description}
          onChange={updateDescription} />
        <input
          type="text"
          placeholder='Image'
          required
          value={imageUrl}
          onChange={updateImageUrl} />
      </form>
      <div className='creator__container-div'>
        <div className='creator__edit--div'>
            <button onClick={updateCard} className='creator__edit--div'>Edit</button>
        </div>
        <div className='creator__delete--div'>
            <button onClick={deleteCard} className='Creator__delete--div'>Delete</button>
        </div>
        <div>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
        </div>
    </div>
    </section>
  );
};

export default EditCardForm;
