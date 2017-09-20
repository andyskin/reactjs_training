import React from 'react';
import classNames from 'classNames';
import Logo from '../Logo/Logo';
import styles from './footer.css';

const Footer = (props) => {
    const ftrClass = classNames('footer', props.className);

    return (
        <footer className={ftrClass}>
            <Logo className="footer__logo" />
        </footer>
    );
}

export default Footer;