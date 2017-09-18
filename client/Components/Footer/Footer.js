import React from 'react';
import Logo from '../Logo/Logo';
import styles from './footer.css';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.footerClass = (props.class) ? `footer ${props.class}` : "footer";
    }

    render() {
        return(
            <footer className={this.footerClass}>
                <Logo class="footer__logo" />
            </footer>
        );
    }
}