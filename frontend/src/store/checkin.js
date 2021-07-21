import { csrfFetch } from './csrf'

//ACTION
const GET_CHECKINS = 'checkin/';
const ADD_ONE = 'checkin/addone';
const REMOVE_CHECKIN = 'checkin/removecheckin';

const loadCheckins = (checkins) =>{
    return {
        type: GET_CHECKINS,
        checkins
    }
}

const addCheckin = (checkin) => {
    return {
        type: ADD_ONE,
        checkin
    }
}

const removeCheckin = (checkinId) => {
    return {
        type: REMOVE_CHECKIN,
        checkinId
    }
}




//THUNK CREATOR

export const getCheckins = () => async (dispatch) => {
    const res = await fetch('/api/checkin');
    const checkin = await res.json();
    dispatch(loadCheckins(checkin));
  }



export const editCheckin = (payload) => async (dispatch) => {
  const res = await csrfFetch(`/api/checkin/${payload.id}`, {
      method: 'PUT',
      body: JSON.stringify(payload)
  });

  const checkin = await res.json();

  if (res.ok) {
      dispatch(addCheckin(checkin));
  }
      return checkin;
}

  export const destroyCheckin = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/checkin/${id}`, {
        method: 'DELETE'
    });
    const card = await res.json();

    if (res.ok) {
        dispatch(removeCheckin(id));
    }
        return card;
}


export const createCheckins = (payload) => async (dispatch) => {
    const res = await csrfFetch('/api/checkin', {
        method: 'POST',
        body: JSON.stringify(payload)
    });

    const card = await res.json();

    if (res.ok) {
        dispatch(addCheckin(card));
    }
        return card;
}



  //cards is an array of objects =P
  const sortList = (checkins) => {
    return checkins.sort((a, b) => {
      return a.name > b.name;
    }).map((checkin) => checkin.id);
  };

  const initialState = { list: [] };

//REDUCER

const checkinReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CHECKINS: {
        const allCheckins = {};
        console.log(action.checkins)
        action.checkins.forEach((checkin) => {
          allCheckins[checkin.id] = checkin;
        });
        console.log(allCheckins)
        return {
          ...allCheckins,
          ...state,
          list: sortList(action.checkins)
        };
      }
        case ADD_ONE: {
            if (!state[action.checkin.id]) {
              const newState = {
                ...state,
                [action.checkin.id]: action.checkin
              };
              const checkinsList = newState.list.map(id => newState[id]);
              checkinsList.push(action.checkin);
              newState.list = sortList(checkinsList);
              return newState;
            }
            return {
              ...state,
              [action.checkin.id]: {
                ...state[action.checkin.id],
                ...action.checkin,
              }
            };
          }
        case REMOVE_CHECKIN: {
        const newState = {
            ...state
        };
        const checkinsList = state.list.filter(checkinId => checkinId !== action.checkinId);
        newState.list = checkinsList;
        delete newState[action.checkinId];
        return newState;
        }
    default:
        return state;
    }
}

export default checkinReducer;
