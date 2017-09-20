import React from 'react';
import classNames from 'classNames';
import Movie from '../Movie/Movie';
import styles from './movielist.css';

export default class MovieList extends React.Component {
    render() {
        const listClass = classNames('movieList', this.props.className);

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
                <Movie info={movie} key={movie.id} className="movieList__movie" />
            );
        }

        return (
            <div className={listClass}>
                {moviesObjs}
            </div>
        );
    }
}