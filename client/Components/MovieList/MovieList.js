import React from 'react';
import Movie from '../Movie/Movie';
import styles from './movielist.css';

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.listClass = (props.class) ? `movieList ${props.class}` : 'movieList';
    }
    render() {
        const movies = [
            {
                id: 1,
                poster: 'http:\/\/netflixroulette.net\/api\/posters\/70230640.jpg',
                title: 'Django Unchained',
                genre: 'Drama',
                year: 2012
            },
            {
                id: 2,
                poster: 'http:\/\/netflixroulette.net\/api\/posters\/902003.jpg',
                title: 'Reservoir Dogs',
                genre: 'Independent Movies',
                year: 1992
            },
            {
                id: 3,
                poster: 'http:\/\/netflixroulette.net\/api\/posters\/880640.jpg',
                title: 'Pulp Fiction',
                genre: 'Oscar-winning Movies',
                year: 1994
            }
        ];

        const moviesObjs = [];
        for (let movie of movies) {
            moviesObjs.push(
                <Movie info={movie} key={movie.id} class="movieList__movie" />
            );
        }

        return (
            <div className={this.listClass}>
                {moviesObjs}
            </div>
        );
    }
}