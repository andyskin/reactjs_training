import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './index.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import MovieInfo from './Components/MovieInfo/MovieInfo';
import SearchBar from './Components/SearchBar/SearchBar';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/'>
                        <Header className="mainHeader">
                            <SearchBar className="mainHeader__searchBar" />
                        </Header>
                    </Route>
                    <Route path='/search/:query'>
                        <Header className="mainHeader">
                            <SearchBar className="mainHeader__searchBar" />
                        </Header>
                    </Route>
                    <Route path='/film/:title'>
                        <Header className="filmHeader">
                            <MovieInfo className="filmHeader__movieInfo" />
                        </Header>
                    </Route>
                </Switch>
                <Main className="app__main" />
                <Footer className="app__footer" />
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));