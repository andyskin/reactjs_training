import React from 'react';
import RadioButton from '../RadioButton/RadioButton';
import Button from '../Button/Button';
import styles from './searchbar.css';

class SearchBar extends React.Component {
    render() {
        return(
            <form className={`searchBar ${this.props.class}`} onSubmit={this.handleSubmit}>
                <input type="text" className="searchBar__searchTerm searchTerm" placeholder="What are you looking for?"/>
                <div className="searchBar__controls">
                    <RadioButton name="title" key="filter1" checked={true} />
                    <RadioButton name="director" key="filter2" />
                    <Button class="searchBar__button" title="search" />
                </div>
            </form>
        );
    }
}

export default SearchBar;