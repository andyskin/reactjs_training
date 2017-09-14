import React from 'react';
import styles from './button.css';

export default class Button extends React.Component {
    render() {
        return (
            <div className={`button ${this.props.class}`}>{this.props.title}</div>
        );
    }
}