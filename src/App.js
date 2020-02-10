import React, {Component} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import rootReducer from './store/reducers/rootReducer';
import Navigation from './config/Navigation';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(promise, thunk, logger)),
);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>

              <Navigation/>


            </Provider>
        );
    }
}
