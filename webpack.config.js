const merge = require('webpack-merge');
const common = require('./webpack/webpack.common');

const envs = {
  development: 'dev',
  production: 'prod',
  test: 'test'
};

let env = envs[process.env.NODE_ENV || 'development'];
if (env !== 'prod') {
  require('dotenv').config({ path: `./.env/.env.${env}` });
  env = 'dev';
};

const envConfig = require(`./webpack/webpack.${env}.js`);
module.exports = merge(common, envConfig);
