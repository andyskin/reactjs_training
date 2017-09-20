import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classNames';
import Button from '../Button/Button';
import styles from './logo.css';

const Logo = (props) => {
    const logoClass = classNames('logo', props.className),
        btnClass = classNames({
            logo__button: true,
            'visible': props.className === 'filmHeader__logo'
        });

    return (
        <div className={logoClass}>
            <span className='logo__title'>NetfixRoulette</span>
            <Link to="/" className={btnClass}>
                <Button className={btnClass} title="search" />
            </Link>
        </div>
    );
}

export default Logo;