import packages from '../db/packages.json';

/**
 * @function getPackagesReq - mock-up func to mimic api request
 */

const getPackagesReq = () =>
  new Promise(res => setTimeout(() => res(packages), 1000));

export default getPackagesReq;
