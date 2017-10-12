import axios from 'axios';

export const fetchMovies = query => dispatch => {
    const url = `https://netflixroulette.net/api/api.php?${query}`;
    
    return axios.get(url)
        .then((response) => {
            dispatch(receiveMovies(response.data));
        })
        .catch((error) => {
            dispatch(fetchError(error));
        });
}

const receiveMovies = movies => ({
    type: 'RECEIVE_MOVIES',
    movies
})

const fetchError = error => ({
    type: "FETCH_MOVIES_REJECTED",
    error
})

export const setCurrentMovie = movie => ({
    type: 'SET_CURRENT_MOVIE',
    movie
})