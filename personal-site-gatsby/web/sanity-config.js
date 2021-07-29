// prettier-ignore
module.exports = {
  projectId: process.env.SANITY_PROJECT_ID || '<#< sanity.projectId >#>',
  dataset: process.env.NODE_ENV || 'production'
};
