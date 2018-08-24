import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './scss/style.scss'
import App from "./app";

const reducers = (state = {
  sidebarIsOpen: false,
}, action) => {
  switch(action.type) {
    case 'TOGGLE_SIDEBAR':
      state = {
        ...state,
        sidebarIsOpen: !state.sidebarIsOpen
      }
      break;
  }
  return state;
} 

const store = createStore(reducers);

store.dispatch({
  type:'TOGGLE_SIDEBAR'
});



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("index"));
