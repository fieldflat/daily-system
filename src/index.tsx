import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import dailyReducer from './reducer';
import rootSaga from './sagas/daily';
import * as serviceWorker from './serviceWorker';

import './index.css';
import './styles/semantic.min.css';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(dailyReducer, applyMiddleware(sagaMiddleWare));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLInputElement,
);

serviceWorker.unregister();
sagaMiddleWare.run(rootSaga);
