import React from 'react';
import classNames from 'classNames';
import styles from './logo.css';

export default class Logo extends React.Component {
    render() {
        const logoClass = classNames('logo', this.props.className);

        return (
            <div className={logoClass}>
                <span className="logo__title">NetfixRoulette</span>
            </div>
        );
    }
}