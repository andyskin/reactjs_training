import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
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
            radio: this.radioButtons[0],
            query: '',
            redirect: false
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
        if (this.state.radio === 'director') {
            this.setState({
                query: `/search/director=${this.state.input}`
            });
            this.props.history.push(query);
        } 
        else {
            this.setState({
                query: `/film/${this.state.input}`,
                redirect: true
            });
        }
    }

    handleRadio(value) {
        this.setState({ radio: value });
    }

    render() {     
        const formClass = classNames('searchBar', this.props.className);
        const {redirect} = this.state;
         
        return(
            <form className={formClass} onSubmit={this.handleSubmit}>
                {redirect && (
                    <Redirect to={this.state.query} />
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

export default withRouter(SearchBar);