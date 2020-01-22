import packages from '../db/packages.json';

const getPackagesReq = () =>
  new Promise(res => setTimeout(() => res(packages), 1000));

export default getPackagesReq;
