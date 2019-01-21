import { prop } from 'ramda';

require('dotenv').config();

const getEnv = env => env || process.env.NODE_ENV || 'test';
const getConfig = config => prop(getEnv(), config);

module.exports = {
  getEnv,
  getConfig,
};
