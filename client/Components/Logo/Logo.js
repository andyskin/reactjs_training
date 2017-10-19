import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentMovie } from '../../actions';
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
            <span className='logo__title'>MovieDB Search</span>
            <Link to="/" className={btnClass} onClick={props.clearCurrentMovie}>
                <Button className={btnClass} title="search" />
            </Link>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        currentMovie: state.movies.currentMovie
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCurrentMovie: (query) => {
            dispatch(setCurrentMovie({}));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Logo);