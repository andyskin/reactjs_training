import React from 'react';
import classNames from 'classNames';
import styles from './movie.css';

export default class Movie extends React.Component {
    render() {
        const movieClass = classNames('movie', this.props.className);

        return (
            <a href="#" className={movieClass}>
                <img src={this.props.info.poster} className="movie__poster" />
                <span className="movie__title">{this.props.info.title}</span>
                <span className="movie__genre">{this.props.info.genre}</span>
                <span className="movie__year">{this.props.info.year}</span>
            </a>
        );
    }
}