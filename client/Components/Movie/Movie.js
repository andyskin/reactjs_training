import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classNames';
import styles from './movie.css';

const Movie = (props) => {
    const movieClass = classNames('movie', props.className);
    
    return (
        <Link to={`/film/${props.info.title}`} className={movieClass}>
            <img src={props.info.poster} className="movie__poster" />
            <span className="movie__title">{props.info.title}</span>
            <span className="movie__genre">{props.info.genre}</span>
            <span className="movie__year">{props.info.year}</span>
        </Link>
    );
}

export default Movie;