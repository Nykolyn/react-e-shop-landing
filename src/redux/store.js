import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

// Reducers
import packagesReducer from './packages/reducer';
// Redux state
const rootReducer = combineReducers({ packages: packagesReducer });

// Middlewars
const middleware = [ReduxThunk];

// Hide redux console on production build
const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware);

const store = createStore(rootReducer, enhancer);

export default store;
