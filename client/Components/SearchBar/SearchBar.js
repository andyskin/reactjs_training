import React from 'react';
import classNames from 'classNames';
import RadioGroup from '../RadioGroup/RadioGroup';
import Button from '../Button/Button';
import styles from './searchbar.css';

export default class SearchBar extends React.Component {

    render() {
        const radioButtons = ['title', 'director'];
        const formClass = classNames('searchBar', this.props.className);
        
        return(
            <form className={formClass} onSubmit={this.handleSubmit}>
                <span className="searchBar__tagline">FIND YOUR MOVIE</span>
                <input type="text" className="searchBar__searchTerm searchTerm" placeholder="What are you looking for?"/>
                <div className="searchBar__controls">
                    <RadioGroup className="searchBar__controls__radioGrp" radioButtons={radioButtons} />
                    <Button className="searchBar__button" title="search" />
                </div>
            </form>
        );
    }
}