import axios from 'axios';

export const fetchMovies = () => {
    return (dispatch) => {
        axios.get('https://netflixroulette.net/api/api.php?director=Quentin%20Tarantino')
             .then((response) => {
                dispatch({
                    type: 'FETCH_MOVIES_FULFILLED',
                    payload: response.data
                });
             })
             .catch((error) => {
                 dispatch({
                     type: 'FETCH_MOVIES_REJECTED',
                     payload: error
                 });
             })
    }
}