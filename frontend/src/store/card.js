//ACTION
const GET_CARDS = 'playingcards/'

const loadCards = (cards) =>{
    return {
        type: GET_CARDS,
        cards
    }
}


//THUNK CREATOR

export const getCards = () => async (dispatch) => {
    const res = await fetch('/api/playingcards');
    const cards = await res.json();
    // console.log(cards);
    dispatch(loadCards(cards));
  }


//REDUCER

const cardReducer = (state = [], action) => {
    switch (action.type) {
        case GET_CARDS:
        return {...state, ...action.cards}
        default:
            return state;
    }
}

export default cardReducer;
