import React from 'react';
import styles from './movieinfo.css';

export default class MovieInfo extends React.Component {
    constructor(props) {
        super(props);
        this.infoClass = (props.class) ? `movieInfo ${props.class}` : 'movieInfo';
    }

    render() {
        return (
            <div className={this.infoClass}>
                <img className="movieInfo__poster" src="#" />
                <div className="movieInfo__info">
                    <span classname="movieInfo__title">F</span>
                    <span classname="movieInfo__rating">4</span>
                    <span className="movieInfo__year">1900</span>
                    <span className="movieInfo__duration">150 min</span>
                </div>
                <p className="movieInfo__description">Smth</p>
                <p className="movieInfo__people">
                    <span className="movieInfo__people__director">Director</span>
                    <span className="movieInfo__people__cast">Cast</span>
                </p>
            </div>
        );
    }
}