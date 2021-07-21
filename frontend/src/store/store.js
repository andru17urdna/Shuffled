import { csrfFetch } from './csrf';

//ACTION
const GET_STORES = 'stores/';
const ADD_ONE = 'stores/addone';
const REMOVE_STORE = 'stores/removecard'



const loadStores = (stores) =>{
    return{
        type: GET_STORES,
        stores
    }
}


const addStore = (store) => {
    return {
        type: ADD_ONE,
        store
    }
}


const removeStore = (storeId) => {
    return {
        type: REMOVE_STORE,
        storeId
    }
}


export const editStore = (payload) => async (dispatch) => {
    const res = await csrfFetch(`/api/stores/${payload.id}`, {
        method: 'PUT',
        body: JSON.stringify(payload)
    });

    const store = await res.json();

    if (res.ok) {
        dispatch(addStore(store));
    }
        return store;
}

export const destroyStore = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/stores/${id}`, {
        method: 'DELETE'
    });
    const store = await res.json();

    if (res.ok) {
        dispatch(removeStore(id));
    }
        return store;
}


export const createStore = (payload) => async (dispatch) => {
    const res = await csrfFetch('/api/stores', {
        method: 'POST',
        body: JSON.stringify(payload)
    });

    const store = await res.json();

    if (res.ok) {
        dispatch(addStore(store));
    }
        return store;
}

// THUNK CREATOR

export const getStores = () => async (dispatch) => {
    const res = await fetch('/api/stores');
    const stores = await res.json();
    dispatch(loadStores(stores));
}


const sortList = (cards) => {
    return cards.sort((a, b) => {
      return a.name > b.name;
    }).map((card) => card.id);
  };

  const initialState = { list: [] };



const storeReducer = (state = initialState, action) => {
    switch (action.type) {
            case GET_STORES: {
                const allStores = {};
                console.log(action.stores)
                action.stores.forEach((store) => {
                  allStores[store.id] = store;
                });
                console.log(allStores)
                return {
                  ...allStores,
                  ...state,
                  list: sortList(action.stores)
                };
              }
              case ADD_ONE: {
                if (!state[action.store.id]) {
                  const newState = {
                    ...state,
                    [action.store.id]: action.store
                  };
                  const storesList = newState.list.map(id => newState[id]);
                  storesList.push(action.store);
                  newState.list = sortList(storesList);
                  return newState;
                }
                return {
                  ...state,
                  [action.store.id]: {
                    ...state[action.store.id],
                    ...action.store,
                  }
                };
              }
              case REMOVE_STORE: {
                const newState = {
                  ...state
                };
                const storesList = state.list.filter(storeId => storeId !== action.storeId);
                newState.list = storesList;
                delete newState[action.storesId];
                return newState;
              }
        default:
            return state;
    }
}

export default storeReducer;
