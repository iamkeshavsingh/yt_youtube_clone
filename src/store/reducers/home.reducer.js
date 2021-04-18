const INIT_STATE = {
    data: [],
    isLoading: false,
    error: null
};


function reducer(state = INIT_STATE, action) {

    if (action.type === 'HOME_FETCH') {
        return { ...state, data: action.payload, isLoading: false };
    }

    if (action.type === 'HOME_FETCH_START') {
        return { ...state, isLoading: true };
    }

    return state;

}


export default reducer;