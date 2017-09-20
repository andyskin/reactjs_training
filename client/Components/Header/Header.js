import React from 'react';
import classNames from 'classNames';
import styles from './header.css';
import filmStyles from './filmHeader.css';

class Header extends React.Component {
    render() {
        const hdrClass = classNames('header', this.props.className);

        return (
            <header className={hdrClass}>
                {this.props.children}
            </header>
        );
    }
}

export default Header;