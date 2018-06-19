const prodKeys = require('./prod');
const devKeys = require('./dev');

const isProdEnv = () => process.env.NODE_ENV === 'production';

module.exports = isProdEnv() ? prodKeys : devKeys;
