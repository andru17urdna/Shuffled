//ACTION
const GET_CHECKINS = 'checkin/'

const loadCheckins = (checkins) =>{
    return {
        type: GET_CHECKINS,
        checkins
    }
}


//THUNK CREATOR

export const getCheckins = () => async (dispatch) => {
    const res = await fetch('/api/checkin');
    const checkin = await res.json();
    dispatch(loadCheckins(checkin));
  }


//REDUCER

const checkinReducer = (state = [], action) => {
    switch (action.type) {
        case GET_CHECKINS:
        return {...state, ...action.checkins}
        default:
            return state;
    }
}

export default checkinReducer;
