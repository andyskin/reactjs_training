import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../Actions';
import classNames from 'classNames';
import Movie from '../Movie/Movie';
import styles from './movielist.css';

// @connect(state => ({
//     movies: state.movies
// }))

class MovieList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(fetchMovies());
    }

    render() {
        const listClass = classNames('movieList', this.props.className);
        const moviesObjs = [];
        
        for (let movie of this.props.movies.movies) {
            moviesObjs.push(
                <Movie info={movie} key={movie.show_id} className="movieList__movie" />
            );
        }

        return (
            <div className={listClass}>
                {moviesObjs}
            </div>
        );
    }
}

export default connect(state => ({ movies: state.movies }))(MovieList);