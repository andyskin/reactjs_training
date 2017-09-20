import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styles from './index.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import SearchBar from './Components/SearchBar/SearchBar';
import MovieInfo from './Components/MovieInfo/MovieInfo';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header>
                    <Switch>
                        <Route exact path='/'
                            component={SearchBar}
                            componentClassName='mainHeader__searchBar'
                        />
                        <Route path='/search/:query'
                            component={SearchBar}
                            componentClassName='mainHeader__searchBar'
                        />
                        <Route path='/film/:title'
                            component={MovieInfo}
                            componentClassName='filmHeader__info'
                        />
                    </Switch>
                </Header>
                <Main className="app__main" />
                <Footer className="app__footer" />
            </div>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));