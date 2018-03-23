/* global __BUILD__ */
/* eslint no-undef: "error" */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import localeLoader from './locale/localeLoader';

import rootSaga from './rootSaga';
import reducers from './rootReducer';

import routeLoader from './routers/routeLoader';

import './styles/style.scss';

console.log('Process environment variable');
console.log(`__BUILD__: ${__BUILD__}`);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

routeLoader.init();
const route = routeLoader.getRoute();

addLocaleData([...en, ...zh]);
const language = localeLoader.getLocaleLanguage();

ReactDOM.render(
    (
        <Provider store={store}>
            <IntlProvider locale={navigator.language} messages={language}>
                <Router history={hashHistory} routes={route} />
            </IntlProvider>
        </Provider>
    ), document.getElementById('root')
);

// reference:
// Multi-language: https://segmentfault.com/a/1190000005824920#articleHeader4
// React-intl: https://github.com/yahoo/react-intl
