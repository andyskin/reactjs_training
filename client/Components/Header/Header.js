import React from 'react';

import headerStyles from './header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.headerClass = (props.class) ? `header ${props.class}` : "header";
    }

    render() {
        return (
            <header className={this.headerClass}>
                {this.props.children}
            </header>
        );
    }
}

export default Header;