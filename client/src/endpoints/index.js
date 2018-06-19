import prodEndpoints from './prod';
import devEndpoints from './dev';

const isProdEnv = () => !window.location.href.includes('localhost');

export default (isProdEnv() ? prodEndpoints : devEndpoints);
