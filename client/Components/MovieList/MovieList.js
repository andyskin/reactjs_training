import React from 'react';
import { connect } from 'react-redux';
import { setCurrentMovie } from '../../actions';
import classNames from 'classNames';
import Movie from '../Movie/Movie';
import styles from './movielist.css';

const MovieList = (props) => {
    const listClass = classNames('movieList', props.className);
    let { movies } = props;

    return (
        <div className={listClass}>
            {movies.map(movie => (
                <Movie info={movie} key={movie.id} className="movieList__movie" pickMovie={props.pickMovie} />
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.items
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        pickMovie: (movie) => {
            window.scrollTo(0,0);
            dispatch(setCurrentMovie(movie))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieList);