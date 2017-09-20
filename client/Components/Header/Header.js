import React from 'react';
import classNames from 'classNames';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import MovieInfo from '../MovieInfo/MovieInfo';
import styles from './header.css';
import filmStyles from './filmHeader.css';

const Header = (props) => {
    const hdrClass = classNames('header', props.className),
        logoClass = `${props.className}__logo`;

    return (
        <header className={hdrClass}>
            <Logo className={logoClass} />
            {props.children}
        </header>
    );
}

export default Header;