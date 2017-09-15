import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import styles from './app.css';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header class="mainHeader">
                    <Logo class="mainHeader__logo"/>
                    <span className="mainHeader__tagline">FIND YOUR MOVIE</span>
                    <SearchBar class="mainHeader__searchBar" />
                </Header>
                <Main />
                <Footer />
            </div>
        );
    }
}