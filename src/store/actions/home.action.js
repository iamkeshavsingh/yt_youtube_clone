import axios from 'axios';



export const homeFetchAsync = function () {

    return async function (dispatch) {
        dispatch(homeFetchStart());
        var res = await axios.get('http://localhost:3001/home');
        dispatch(homeFetch(res.data));
    }
}


function homeFetchStart() {

    return {
        type: 'HOME_FETCH_START'
    };
}


const homeFetch = function (data) {

    return {
        type: 'HOME_FETCH',
        payload: data
    };
}