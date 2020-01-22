import getPackagesReq from '../../services/packages-api';

export const PackagesActions = {
  GET_PACKAGES_START: 'GET_PACKAGES_START',
  GET_PACKAGES_SUCCESS: 'GET_PACKAGES_SUCCESS',
  GET_PACKAGES_ERROR: 'GET_PACKAGES_ERROR',
};

const getPackagesStart = () => ({
  type: PackagesActions.GET_PACKAGES_START,
});

const getPackagesSuccess = data => ({
  type: PackagesActions.GET_PACKAGES_SUCCESS,
  payload: { data },
});

const getPackagesError = error => ({
  type: PackagesActions.GET_PACKAGES_ERROR,
  payload: { error },
});

export const getPackages = () => async dispatch => {
  dispatch(getPackagesStart());

  try {
    const data = await getPackagesReq();
    dispatch(getPackagesSuccess(data));
  } catch (err) {
    dispatch(getPackagesError(err));
  }
};
