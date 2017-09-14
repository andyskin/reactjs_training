import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import headerStyles from './header.css';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <span className="header__title">NetfixRoulette</span>
                <span className="header__tagline">FIND YOUR MOVIE</span>
                <SearchBar class="header__searchBar" />
            </header>
        );
    }
}

export default Header;