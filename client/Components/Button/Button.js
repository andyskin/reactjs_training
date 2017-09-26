import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classNames';
import styles from './button.css';

const Button = (props) => {
    const btnClass = classNames('button', props.className),
        type = props.type || 'button';

    return (
        <button className={btnClass} type={type}>{props.title}</button>
    );
}

export default Button;