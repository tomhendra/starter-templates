const isTest = String(process.env.NODE_ENV) === "test";

module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: isTest ? "commonjs" : false
        }
      }
    ],
    "@babel/preset-react"
  ];
  const plugins = [
    "react-hot-loader/babel",
    "@babel/plugin-proposal-class-properties",
    isTest ? "dynamic-import-node" : null
  ].filter(Boolean);

  return {
    presets,
    plugins
  };
};
