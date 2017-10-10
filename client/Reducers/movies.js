const movies = (state = {
    movies: [],
    currentMovie: null,
    error: null
}, action) => {
    switch (action.type) {
        case 'FETCH_MOVIES': {
            return {
                ...state,
                movies: action.payload
            }
        }
        case 'FETCH_MOVIES_REJECTED': {
            return {
                ...state,
                error: action.payload
            }
        }
        case 'SET_CURRENT_MOVIE': 
            return {
                ...state,
                currentMovie: action.payload
            }
        
        default: 
            return state;
    }
}

export default movies;