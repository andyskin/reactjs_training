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
                    <span className="movieInfo__title">{movie.show_title}</span>
                    <span className="movieInfo__rating">{movie.vote_average}</span>
                </p>
                <span className="movieInfo__genre">{movie.category}</span>
                <p>
                    <span className="movieInfo__year">{movie.release_year}</span>
                    <span className="movieInfo__duration">154 min</span>
                </p>
                <p className="movieInfo__description">{movie.summary}</p>
            </div>
            <div className="movieInfo__people">
                <p className="movieInfo__director">Director: {movie.director}</p>
                <p className="movieInfo__cast">Cast: {movie.show_cast}</p>
            </div>
        </div>
    );
}

export default connect(
    state => ({ movie: state.movies.currentMovie })
)(MovieInfo);