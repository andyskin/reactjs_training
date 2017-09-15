import React from 'react';
import styles from './infobar.css';

export default class InfoBar extends React.Component {
    render() {
        return (
            <div className={`infoBar ${this.props.class}`}> </div>
        );
    }
}