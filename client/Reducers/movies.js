const movies = (state = {
    movies: [],
    fetching: false,
    fetched: false,
    error: null
}, action) => {
    switch (action.type) {
        case 'FETCH_MOVIES': {
            return {
                ...state,
                fetching: true
            }
        }
        case 'FETCH_MOVIES_FULFILLED': 
            return {
                ...state,
                movies: action.payload,
                fetching: false,
                fetched: true
            }
        case 'FETCH_MOVIES_REJECTED': 
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        
        default: 
            return state;
    }
}

export default movies;