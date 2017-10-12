import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { fetchMovies } from '../../actions';
import classNames from 'classNames';
import RadioGroup from '../RadioGroup/RadioGroup';
import Button from '../Button/Button';
import styles from './searchbar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.radioButtons = ['title', 'director'];

        this.state = {
            input: '',
            radio: this.radioButtons[0]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRadio = this.handleRadio.bind(this)
    }

    handleChange(event) {
        this.setState({ input: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();        
        const query = `${this.state.radio}=${this.state.input}`;
        this.props.fetchMovies(query);

        if (this.state.radio === 'director') 
            this.props.history.push(`/search/${query}`);
    }

    handleRadio(value) {
        this.setState({ radio: value });
    }

    render() {     
        const formClass = classNames('searchBar', this.props.className);
         
        return(
            <form className={formClass} onSubmit={this.handleSubmit}>
                {this.props.currentMovie.show_title && (
                    <Redirect to={`/film/${this.props.currentMovie.show_title}`} />
                )}
                <span className="searchBar__tagline">FIND YOUR MOVIE</span>
                <input type="text" className="searchBar__searchTerm searchTerm" placeholder="What are you looking for?" onChange={this.handleChange}/>
                <div className="searchBar__controls">
                    <RadioGroup className="searchBar__controls__radioGrp" radioButtons={this.radioButtons} onUpdate={this.handleRadio} />
                    <Button className="searchBar__button" title="search" type="submit" />
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentMovie: state.movies.currentMovie
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: (query) => {
            dispatch(fetchMovies(query))
        }
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(SearchBar)
);