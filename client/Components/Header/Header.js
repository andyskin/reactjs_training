import React from 'react';

import headerStyles from './header.css';

class Header extends React.Component {
    render() {
        return (
            <header className={`header ${this.props.class}`}>
                {this.props.children}
            </header>
        );
    }
}

export default Header;