import React from 'react';
import RadioButton from '../RadioButton/RadioButton';
import RadioGroup from '../RadioGroup/RadioGroup';
import Button from '../Button/Button';
import styles from './searchbar.css';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.formClass = (props.class) ? `searchBar ${props.class}` : 'searchBar';
    }

    render() {
        const radioButtons = ['title', 'director'];
        return(
            <form className={this.formClass} onSubmit={this.handleSubmit}>
                <input type="text" className="searchBar__searchTerm searchTerm" placeholder="What are you looking for?"/>
                <div className="searchBar__controls">
                    <RadioGroup class="searchBar__controls__radioGrp" radioButtons={radioButtons} />
                    <Button class="searchBar__button" title="search" />
                </div>
            </form>
        );
    }
}