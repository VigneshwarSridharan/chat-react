import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './scss/style.scss'
import App from "./app";

import socket from './socket';


const reducers = (state = {
  sidebarIsOpen: false,
  user: window.user ? user : null,
  activeUsers: []
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
      io.emit('setActive', window.user );
      state = {
        ...state,
        user: action.user,
      }
      break;
    case 'ACTIVE_USERS':
      state = {
        ...state,
        activeUsers: action.activeUsers.filter(f => f.user_id != window.user.user_id)
      }
      break;
  }
  return state;
} 

const store = createStore(reducers);

socket(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("index"));
