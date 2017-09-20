import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
        return (
            <div>
                <Switch>
                    <Route exact path='/'>
                        <Header className="mainHeader">
                            <Logo className="mainHeader__logo" />
                            <span className="mainHeader__tagline">FIND YOUR MOVIE</span>
                            <SearchBar className="mainHeader__searchBar" />
                        </Header>
                    </Route>
                    <Route path='/movie/:id'>
                        <Header className="filmHeader">
                            <Logo className="filmHeader__logo" />
                            <Button className="filmHeader__button" title="search" />
                            <MovieInfo className="filmHeader__info" />
                        </Header>
                    </Route>
                </Switch>
                <Main className="app__main" />
                <Footer className="app__footer" />
            </div>
        );
    }
}