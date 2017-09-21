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
            <Switch>
                <Route exact path='/'>
                    <div>
                        <Header className="mainHeader">
                            <SearchBar className="mainHeader__searchBar" />
                        </Header>
                        <Main className="app__main" />
                        <Footer className="app__footer" />
                    </div>
                </Route>
                <Route path='/search/:query'>
                    <div>
                        <Header className="mainHeader">
                            <SearchBar className="mainHeader__searchBar" />
                        </Header>
                        <Main className="app__main" />
                        <Footer className="app__footer" />
                    </div>
                </Route>
                <Route path='/film/:title'>
                    <div>
                        <Header className="filmHeader">
                            <MovieInfo className="filmHeader__movieInfo" />
                        </Header>
                        <Main className="app__main" />
                        <Footer className="app__footer" />
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));