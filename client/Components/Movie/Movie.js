import React from 'react';
import styles from './movie.css';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.movieClass = (props.class) ? `movie ${props.class}` : 'movie';
    }

    render() {
        return (
            <div className={this.movieClass}>
                <img src={this.props.info.poster} className="movie__poster" />
                <span className="movie__title">{this.props.info.title}</span>
                <span className="movie__genre">{this.props.info.genre}</span>
                <span className="movie__year">{this.props.info.year}</span>
            </div>
        );
    }
}