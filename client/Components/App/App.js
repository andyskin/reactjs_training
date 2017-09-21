import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import MovieInfo from '../MovieInfo/MovieInfo';
import SearchBar from '../SearchBar/SearchBar';

const App = (props) => {
    const headerClass = (props.headerClass) ? props.headerClass : 'mainHeader';

    const child = (headerClass === 'mainHeader')
                    ? <SearchBar className="mainHeader__searchBar" />
                    : <MovieInfo className="filmHeader__movieInfo" />;
    return (
        <div>
            <Header className={headerClass}>
                {child}
            </Header>
            <Main className="app__main" />
            <Footer className="app__footer" />
        </div>
    );
};

export default App;