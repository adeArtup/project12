import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import appReducer from './reducer'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store  = createStore(
  appReducer, 
  composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
);

export default store