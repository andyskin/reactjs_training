import React from 'react';
import classNames from 'classNames';
import styles from './button.css';

export default class Button extends React.Component {
    render() {
        const btnClass = classNames('button', this.props.className);

        return (
            <div className={btnClass}>{this.props.title}</div>
        );
    }
}