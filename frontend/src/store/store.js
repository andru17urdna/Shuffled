//ACTION
const GET_STORES = 'stores/';

const loadStores = (stores) =>{
    return{
        type: GET_STORES,
        stores
    }
}


// THUNK CREATOR

export const getStores = () => async (dispatch) => {
    const res = await fetch('/api/stores');
    const stores = await res.json();
    dispatch(loadStores(stores));
}

const storeReducer = (state = [], action) => {
    switch (action.type) {
        case GET_STORES:
            return {...state, ...action.stores}
        default:
            return state;
    }
}

export default storeReducer;
