import axios from 'axios';

export const fetchMovies = params => dispatch => {
    const {genre, title} = params;
    const config = {
        method: 'get',
        url: `https://api.themoviedb.org/3/search/${genre}`,
        params: {
            query: title,
            language: 'en-US',
            include_adult: true,
            api_key: '5045460124cca3eac111655137b387ba'
        }
    };

    return axios.request(config)
        .then(response => {
            let movies = processResponse(response.data.results);
            dispatch(receiveMovies(movies));
        })
        .catch(error => dispatch(fetchError(error)));
}

const processResponse = data => {
    console.log(data);
    const movies = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].media_type === 'person') continue;
        const genre = (data[i].media_type) ? data[i].media_type
                                           : data[i].title ? 'movie' : 'tv';
        let movie = {
            id: data[i].id,
            title: '',
            poster: data[i].poster_path ? `https://image.tmdb.org/t/p/w640${data[i].poster_path}`
                : 'http://www.cineart.be/Documents/Document/Large/20120510153359-NoPosterAvailable.jpg',
            rating: data[i].vote_average,
            votes: data[i].vote_count,
            genre: genre.charAt(0).toUpperCase() + genre.slice(1),
            description: data[i].overview,
            year: undefined,
        };
        if (genre === 'movie') {
            movie.title = data[i].title;
            movie.year = data[i].release_date.split('-')[0];
        } else {
            movie.title = data[i].name;
            movie.year = data[i].first_air_date.split('-')[0];
        }
        movies.push(movie);
    }
    return movies;
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