import React from 'react';
import InfoBar from '../InfoBar/InfoBar';
import MovieList from '../MovieList/MovieList';
import styles from './main.css';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.mainClass = (props.class) ? `main ${props.class}` : "main";
    }

    render() {
        return(
            <main className={this.mainClass}>
                <InfoBar class="main__info" />
                <MovieList class="main__movieList" />
            </main>
        );
    }
}