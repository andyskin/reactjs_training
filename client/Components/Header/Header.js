import React from 'react';
import classNames from 'classNames';
import Logo from '../Logo/Logo';
import styles from './header.css';
import filmStyles from './filmHeader.css';

const Header = (props) => {
    const hdrClass = classNames('header', props.headerClassName),
        componentClass = props.componentClassName;

    return (
        <header className={hdrClass}>
            <Logo className="mainHeader__logo" />
            {React.cloneElement(props.children, { className: props.componentClassName })}
        </header>
    );
}

export default Header;