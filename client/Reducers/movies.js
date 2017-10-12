const movies = (state = {
    items: [],
    currentMovie: null,
    error: null
}, action) => {
    switch (action.type) {
        case 'RECEIVE_MOVIES': {
            return {
                ...state,
                items: action.movies
            }
        }
        case 'FETCH_MOVIES_REJECTED': {
            return {
                ...state,
                error: action.error
            }
        }
        case 'SET_CURRENT_MOVIE': 
            return {
                ...state,
                currentMovie: action.movie
            }
        
        default: 
            return state;
    }
}

export default movies;