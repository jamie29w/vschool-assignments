import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';
import bounties from './redux/bounties';

import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const reducer = combineReducers({ bounties });

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
