import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classNames';
import styles from './movie.css';

const Movie = (props) => {
    const movieClass = classNames('movie', props.className);
    const { info } = props;

    return (
        <Link to={`/film/${info.title}`} className={movieClass} onClick={() => {props.pickMovie(info)}}>
            <img src={info.poster} className="movie__poster" />
            <span className="movie__title">{info.title}</span>
            <span className="movie__year">{info.year}</span>
        </Link>
    );
}

export default Movie;