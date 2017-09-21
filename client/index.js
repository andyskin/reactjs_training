import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './index.css';
import App from './Components/App/App';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import MovieInfo from './Components/MovieInfo/MovieInfo';
import SearchBar from './Components/SearchBar/SearchBar';

const Tool = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component= {App } />
                <Route path='/search/:query' component={ App } />
                <Route path='/film/:title' component={() => (<App headerClass="filmHeader" />)} />
                <Route component={App} />
            </Switch>
        </BrowserRouter>
    );
};

ReactDOM.render(<Tool />, document.getElementById('app'));