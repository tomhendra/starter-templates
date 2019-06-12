const merge = require('webpack-merge');
const common = require('./webpack/webpack.common');

const envs = {
  development: 'dev',
  production: 'prod',
  test: 'test'
};

const env = envs[process.env.NODE_ENV || 'development'];
if (env === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if (env === 'dev') {
  require('dotenv').config({ path: '.env.dev' });
}
const envConfig = require(`./webpack/webpack.${env}.js`);
module.exports = merge(common, envConfig);
// conditional logic to determine which firebase database credentials to use, test or main
