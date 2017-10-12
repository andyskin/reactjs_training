import React from 'react';
import classNames from 'classNames';
import InfoBar from '../InfoBar/InfoBar';
import MovieList from '../MovieList/MovieList';
import styles from './main.css';

const Main = (props) => {
    const mainClass = classNames('main', props.className);

    return (
        <main className={mainClass}>
            <InfoBar className="main__info" />
            <MovieList className="main__movieList" movies={props.movies} setCurrentMovie={props.setCurrentMovie} dispatch={props.dispatch}/>
        </main>
    );
}

export default Main;