import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { RegistroApp } from './containers/RegistroApp';
import { store } from './store/store';
import './styles/style.css';

ReactDOM.render(
  <Provider store={store}>
    <RegistroApp />
  </Provider>,
  document.getElementById('root')
);