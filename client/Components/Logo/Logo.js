import React from 'react';
import styles from './logo.css';

export default class Logo extends React.Component {
    render() {
        return (
            <div className={`logo ${this.props.class}`}>
                <span className="logo__title">NetfixRoulette</span>
            </div>
        );
    }
}