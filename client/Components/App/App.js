import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import MovieInfo from '../MovieInfo/MovieInfo';
import styles from './app.css';

export default class App extends React.Component {
    render() {
        const page = "film";
        const headerClass = (page === "main") ? "mainHeader" : "filmHeader";
        const headerChildren = [];

        if (page === "main") {
            // headerChildren.push(<Logo class="mainHeader__logo" key="logo" />);

            // headerChildren.push(<span className="mainHeader__tagline" key="tagline">FIND YOUR MOVIE</span>);
            // headerChildren.push(<SearchBar class="mainHeader__searchBar" key="searchbar" />);
        } else {
            headerChildren.push(<Logo class="filmHeader__logo" key="logo" />);
            headerChildren.push(<MovieInfo class="filmHeader__info" key="movieInfo"/>);
            // headerChildren.push(<Logo class="filmHeader__logo" key="logo" />);
            // headerChildren.push(<Button className="filmHeader__button" />);
            // headerChildren.push(<MovieInfo />);
        }

        return (
            <div className="app">
                <Header class={headerClass}>
                    {headerChildren}
                </Header>
                <Main class="app__main" />
                <Footer class="app__footer" />
            </div>
        );
    }
}