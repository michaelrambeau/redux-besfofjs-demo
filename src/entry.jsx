import ReactDom from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';

const initialState = {
  counter: 0,
  projects: {
    items: []
  }
};

const store = configureStore(initialState);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
