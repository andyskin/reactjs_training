import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../Actions';
import classNames from 'classNames';
import Movie from '../Movie/Movie';
import styles from './movielist.css';


class MovieList extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchMovies());
    }

    render() {
        const listClass = classNames('movieList', this.props.className);
        const { movies } = this.props.movies;
        const movieArray = [];

        for (let movie of movies) {
            movieArray.push(<Movie info={movie} key={movie.show_id} className="movieList__movie" />);
        }
        return (
            <div className={listClass}>
                {movieArray}
            </div>
        );
    }
}

export default connect(state => ({ movies: state.movies }))(MovieList);