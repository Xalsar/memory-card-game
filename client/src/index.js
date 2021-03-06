import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import deck from './store/reducers/deck'
import user from './store/reducers/user'

/*

Create store and add functionallity to work with redux devtools

*/

const store = createStore(combineReducers({
  deck,
  user
}), composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();