import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import sidebarRecuder from './store/reducers/sidebar';
import chatRecuder from './store/reducers/chat';
import dashboardRecuder from './store/reducers/dashboard';
import teamReducer from './store/reducers/team';
import eventsReducer from './store/reducers/events'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    sidebar: sidebarRecuder,
    chat: chatRecuder,
    dashboard: dashboardRecuder,
    team: teamReducer,
    events: eventsReducer
})

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
