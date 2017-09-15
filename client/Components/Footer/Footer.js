import React from 'react';
import Logo from '../Logo/Logo';
import styles from './footer.css';

export default class Footer extends React.Component {
    render() {
        return(
            <footer className="footer">
                <Logo />
            </footer>
        );
    }
}