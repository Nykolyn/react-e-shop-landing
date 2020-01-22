import { combineReducers } from 'redux';

import { PackagesActions } from './actions';

const loading = (state = false, { type }) => {
  switch (type) {
    case PackagesActions.GET_PACKAGES_START:
      return true;

    case PackagesActions.GET_PACKAGES_ERROR:
      return false;

    case PackagesActions.GET_PACKAGES_SUCCESS:
      return false;

    default:
      return state;
  }
};

const data = (state = [], { type, payload }) => {
  switch (type) {
    case PackagesActions.GET_PACKAGES_SUCCESS:
      return payload.data;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case PackagesActions.GET_PACKAGES_ERROR:
      return payload.error;

    case PackagesActions.GET_PACKAGES_SUCCESS:
      return false;

    default:
      return state;
  }
};

export default combineReducers({ data, error, loading });
