import { csrfFetch } from './csrf'

//ACTION
const GET_CARDS = 'playingcards/getcards';
const ADD_ONE = 'playingcards/addone';
const REMOVE_CARD = 'playingcards/removecard';
const GET_ONE = 'playingcards/:id';

const getCard = (card) => {
    return {
      type: GET_ONE,
      card
    }
}

const loadCards = (cards) => {
    return {
        type: GET_CARDS,
        cards
    }
}


const addCard = (card) => {
    return {
        type: ADD_ONE,
        card
    }
}

const removeCard = (cardId) => {
    return {
        type: REMOVE_CARD,
        cardId
    }
}


export const editCard = (payload) => async (dispatch) => {
    const res = await csrfFetch(`/api/playingcards/${payload.id}`, {
        method: 'PUT',
        body: JSON.stringify(payload)
    });

    const card = await res.json();
    console.log(card);
    if (res.ok) {
        dispatch(addCard(card));
    }
        return card;
}

export const destroyCard = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/playingcards/${id}`, {
        method: 'DELETE'
    });
    const card = await res.json();

    if (res.ok) {
        dispatch(removeCard(id));
    }
        return card;
}


export const createCard = (payload) => async (dispatch) => {
    const res = await csrfFetch('/api/playingcards', {
        method: 'POST',
        body: JSON.stringify(payload)
    });

    const card = await res.json();
    if (res.ok) {
        dispatch(addCard(card));
    }
        return card;
}

//THUNK CREATOR

export const getCards = () => async (dispatch) => {
    const res = await fetch('/api/playingcards');
    const cards = await res.json();
    dispatch(loadCards(cards));
  }

export const getOneCard = (cardId) => async(dispatch) => {
  const res = await fetch(`/api/playingcards/${cardId}`);
  const card = await res.json();
  dispatch(getCard(card))
}


//cards is an array of objects =P
  const sortList = (cards) => {
    return cards.sort((a, b) => {
      return a.name > b.name;
    }).map((card) => card.id);
  };

  const initialState = { list: [] };



//REDUCER

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
            case GET_CARDS: {
                const allCards = {};
                action.cards.forEach((card) => {
                  allCards[card.id] = card;
                });
                return {
                  ...allCards,
                  ...state,
                  list: sortList(action.cards)
                };
              }
              case GET_ONE: {
                console.log(action.card)
                return {
                  ...action.card,
                  ...state
                }
              }
              case ADD_ONE: {
                if (!state[action.card.id]) {
                  const newState = {
                    ...state,
                    [action.card.id]: action.card
                  };
                  const cardsList = newState.list.map(id => newState[id]);
                  cardsList.push(action.card);
                  newState.list = sortList(cardsList);
                  return newState;
                }
                return {
                  ...state,
                  [action.card.id]: {
                    ...state[action.card.id],
                    ...action.card,
                  }
                };
              }
              case REMOVE_CARD: {
                const newState = {
                  ...state
                };
                const cardsList = state.list.filter(cardId => cardId !== action.cardId);
                newState.list = cardsList;
                delete newState[action.cardId];
                return newState;
              }
        default:
            return state;
    }
}

export default cardReducer;
