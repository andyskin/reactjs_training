import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import styles from './index.css';
import App from './Components/App/App';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

const Index = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/search/:query' component={App} />
                <Route path='/film/:title' component={() => (<App headerClass="filmHeader" />)} />
                <Route component={App} />
            </Switch>
        </BrowserRouter>
    );
};

ReactDOM.render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById('app')
);