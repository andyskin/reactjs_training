import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classNames';
import styles from './movie.css';

const Movie = (props) => {
    const movieClass = classNames('movie', props.className);
    const { info } = props;

    return (
        <Link to={`/film/${info.show_title}`} className={movieClass}>
            <img src={info.poster} className="movie__poster" />
            <span className="movie__title">{info.show_title}</span>
            <span className="movie__genre">{info.category}</span>
            <span className="movie__year">{info.release_year}</span>
        </Link>
    );
}

export default Movie;