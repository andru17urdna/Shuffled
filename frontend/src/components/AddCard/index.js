import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStores } from '../../store/store';
import { createCard } from '../../store/card';
import { useHistory } from 'react-router-dom';


const CreateCardForm = () => {

  // const allStoresNames = useSelector(state => state.stores);
  const dispatch = useDispatch();
  const history = useHistory();

  const stores = useSelector((state) => {
    return state.stores.list.map(storeId => state.stores[storeId]);
  });



  useEffect(() => {
    dispatch(getStores());
}, []);




  // console.log(stores, 'STORES');


  const [storeId, setStoreId] = useState(stores[0]?.title);
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState([]);




  const updateStoreName = (e) => setStoreId(+e.target.value);
  const updateName = (e) => setName(e.target.value);
  const updateImageUrl = (e) => setImageUrl(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);

  const sessionUser = useSelector((state) => state.session.user)
    // setUserId(sessionUser.id);

// console.log(sessionUser.id, 'OJWOGREOWHNWOGHNGOHEGWOIUGEWH')



  // useEffect(() => {
  //   if (stores.length && !storeName) {
  //     setStoreId(stores.title[0]);
  //   }
  // }, [stores, storeName]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const createdCardDeck = {
      userId :sessionUser.id,
      storeId,
      name,
      imageUrl,
      description
    };
      console.log(createdCardDeck)
    if (createdCardDeck) {
      const cardInfo = await dispatch(createCard(createdCardDeck))
        if (cardInfo && cardInfo.errors) {
          setErrors(cardInfo.errors)
        } else {
          // ${createdCardDeck.id}
          history.push(`/browsecards`);
        }
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="new-form-holder centered middled">
      <form onSubmit={handleSubmit}>
      <div id='error_ul-container-div'>
        <ul id='signup__errors'>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
      </div>
        <input
          type="text"
          placeholder="Name"
          min="4"
          required
          value={name}
          onChange={updateName} />
        <select onChange={updateStoreName}>
          {stores && stores.map(store =>
            <option value={store.id} key={store.id}>{store.title}</option>
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
        <button type="submit" onClick={handleSubmit}>Create new Card</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </section>
  );
};

export default CreateCardForm;
