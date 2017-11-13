import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classNames';
import styles from './movieinfo.css';

const MovieInfo = (props) => {
    const infoClass = classNames('movieInfo', props.className);
    const { movie } = props;

    return (
        <div className={infoClass}>
            <div className="movieInfo__poster">
                <img src={movie.poster} />
            </div>
            <div className="movieInfo__info">
                <p>
                    <span className="movieInfo__title">{movie.title}</span>
                    <span className="movieInfo__rating">{movie.rating}</span>
                    <span> [{movie.votes}] votes</span>
                </p>
                <span className="movieInfo__genre">{movie.genre}</span>
                <p>
                    <span className="movieInfo__year">{movie.year}</span>
                </p>
                <p className="movieInfo__description">{movie.description}</p>
            </div>
        </div>
    );
}

export default connect(
    state => ({ movie: state.movies.currentMovie })
)(MovieInfo);