import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classNames';
import styles from './button.css';

const Button = (props) => {
    const btnClass = classNames('button', props.className);

    return (
        <div className={btnClass}>{props.title}</div>
    );
}

export default Button;