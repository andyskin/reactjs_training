import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classNames';
import RadioGroup from '../RadioGroup/RadioGroup';
import Button from '../Button/Button';
import styles from './searchbar.css';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            redirect: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ input: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        const radioButtons = ['title', 'director'];
        const formClass = classNames('searchBar', this.props.className);
        
        return(
            <form className={formClass} onSubmit={this.handleSubmit}>
                <span className="searchBar__tagline">FIND YOUR MOVIE</span>
                <input type="text" className="searchBar__searchTerm searchTerm" placeholder="What are you looking for?" onChange={this.handleChange}/>
                <div className="searchBar__controls">
                    <RadioGroup className="searchBar__controls__radioGrp" radioButtons={radioButtons} />
                    <Link to={`/search/${this.state.input}`}>
                        <Button className="searchBar__button" title="search" />
                    </Link>
                </div>
            </form>
        );
    }
}