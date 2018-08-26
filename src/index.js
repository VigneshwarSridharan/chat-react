import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './scss/style.scss'
import App from "./app";

const reducers = (state = {
  sidebarIsOpen: false,
  user: window.user ? user : null
}, action) => {
  switch(action.type) {
    case 'TOGGLE_SIDEBAR':
      state = {
        ...state,
        sidebarIsOpen: !state.sidebarIsOpen
      }
      break;
    case 'SET_USER':
      window.user = action.user;
      state = {
        ...state,
        user: action.user
      }
      break;
  }
  return state;
} 

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("index"));
