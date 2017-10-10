import React from 'react';
import classNames from 'classNames';
import styles from './movieinfo.css';

const MovieInfo = (props) => {
    const infoClass = classNames('movieInfo', props.className);
    console.log(props.params);

    return (
        <div className={infoClass}>
            <div className="movieInfo__poster">
                <img src="http:\/\/netflixroulette.net\/api\/posters\/880640.jpg" />
            </div>
            <div className="movieInfo__info">
                <p>
                    <span className="movieInfo__title">Pulp Fiction</span>
                    <span className="movieInfo__rating">4.1</span>
                </p>
                <span className="movieInfo__genre">Oscar-winning Movies</span>
                <p>
                    <span className="movieInfo__year">1994</span>
                    <span className="movieInfo__duration">154 min</span>
                </p>
                <p className="movieInfo__description">Weaving together three stories featuring a burger-loving hit man, his philosophical partner and a washed-up boxer, Quentin Tarantino influenced a generation of filmmakers with this crime caper's stylized, over-the-top violence and dark comic spirit.</p>
            </div>
            <div className="movieInfo__people">
                <p className="movieInfo__director">Director: Quentin Tarantino</p>
                <p className="movieInfo__cast">Cast: John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis, Harvey Keitel, Tim Roth, Amanda Plummer, Ving Rhames, Eric Stoltz, Maria de Medeiros</p>
            </div>
        </div>
    );
}

export default MovieInfo;