import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.css/bootstrap.min.css';
import store from './store/store';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
