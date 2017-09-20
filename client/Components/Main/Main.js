import React from 'react';
import classNames from 'classNames';
import InfoBar from '../InfoBar/InfoBar';
import MovieList from '../MovieList/MovieList';
import styles from './main.css';

export default class Main extends React.Component {
    render() {
        const mainClass = classNames('main', this.props.className);

        return(
            <main className={mainClass}>
                <InfoBar className="main__info" />
                <MovieList className="main__movieList" />
            </main>
        );
    }
}