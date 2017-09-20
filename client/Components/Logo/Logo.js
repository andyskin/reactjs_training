import React from 'react';
import classNames from 'classNames';
import Button from '../Button/Button';
import styles from './logo.css';

const Logo = (props) => {
    const logoClass = classNames('logo', props.className),
        btnClass = classNames({
            logo__button: true,
            visible: props.className === 'filmHeader__logo'
        });

    return (
        <div className={logoClass}>
            <span className='logo__title'>NetfixRoulette</span>
            <Button className="logo__button" title="search" />
        </div>
    );
}

export default Logo;