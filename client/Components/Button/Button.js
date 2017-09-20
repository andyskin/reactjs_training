import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classNames';
import styles from './button.css';

const Button = (props) => {
    const btnClass = classNames('button', props.className);
    const path = (props.className === 'searchBar_button') ? "/search/query": "/";

    return (
        <Link to={path}>
            <div className={btnClass}>{props.title}</div>
        </Link>
    );
}

export default Button;