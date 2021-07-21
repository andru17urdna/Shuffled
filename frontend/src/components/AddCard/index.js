import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStores } from '../../store/store';
import { useHistory } from 'react-router-dom';

const CreateCard = ({ hideForm }) => {
  // const storeNumId = useSelector(state => state.store.id);
  const dispatch = useDispatch();
  const history = useHistory();
  const [userId, setUserId] = useState();
  const [storeId, setStoreId] = useState();
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
//   const [type, setType] = useState(pokeTypes[0]);


  const updateUserId = (e) => setUserId(e.target.value);
  const updateStoreId = (e) => setStoreId(e.target.value);
  const updateName = (e) => setName(e.target.value);
  const updateImageUrl = (e) => setImageUrl(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);


  useEffect(() => {
    dispatch(getPokemonTypes());
  }, [dispatch]);

  useEffect(() => {
    if (pokeTypes.length && !type) {
      setType(pokeTypes[0]);
    }
  }, [pokeTypes, storeId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const payload = {
    //   no,
    //   attack,
    //   defense,
    //   imageUrl,
    //   name,
    //   type,
    //   move1,
    //   move2,
    //   moves: [move1, move2],
    // };

    let createdCardDeck;
    if (createdCardDeck) {
      history.push(`/browsecards/${createdCardDeck.id}`);
      hideForm();
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    hideForm();
  };

  return (
    <section className="new-form-holder centered middled">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          min="4"
          required
          value={name}
          onChange={updateName} />
        <select onChange={updateStoreId}>
          {Store.map(store =>
            <option key={store.id}>{store.name}</option>
          )}
        </select>
        <input
          type="text"
          placeholder="Description"
          min="0"
          max="500"
          required
          value={description}
          onChange={updateDescription} />
        <input
          type="text"
          placeholder="Image URL"
          required
          value={imageUrl}
          onChange={updateImageUrl} />
        <button type="submit">Create new Pokemon</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </section>
  );
};

export default CreatePokemonForm;
