const merge = require('webpack-merge');
const common = require('./webpack/webpack.common');

const envs = {
  development: 'dev',
  production: 'prod',
  test: 'test'
};

const env = envs[process.env.NODE_ENV || 'development'];
env !== 'prod' && require('dotenv').config({ path: `./.env/.env.${env}` });
const envConfig = require(`./webpack/webpack.${env}.js`);
module.exports = merge(common, envConfig);
