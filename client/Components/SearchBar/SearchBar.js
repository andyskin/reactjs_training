import React from 'react';
import RadioButton from '../RadioButton/RadioButton';
import Button from '../Button/Button';
import styles from './searchbar.css';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 'title'
        }
    }

    render() {
        return(
            <form className={`searchBar ${this.props.class}`} onSubmit={this.handleSubmit}>
                <input type="text" className="searchBar__searchTerm searchTerm" placeholder="What are you looking for?"/>
                <div className="searchBar__controls">
                    <RadioButton class="searchBar__controls__radio" name="title" key="title" isChecked={(this.state.selectedOption === 'title')} />
                    <RadioButton class="searchBar__controls__radio" name="director" key="director" isChecked={(this.state.selectedOption === 'director')} />
                    <Button class="searchBar__button" title="search" />
                </div>
            </form>
        );
    }
}