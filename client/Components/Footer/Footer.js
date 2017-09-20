import React from 'react';
import classNames from 'classNames';
import Logo from '../Logo/Logo';
import styles from './footer.css';

export default class Footer extends React.Component {
    render() {
        const ftrClass = classNames('footer', this.props.className);

        return(
            <footer className={ftrClass}>
                <Logo className="footer__logo" />
            </footer>
        );
    }
}