const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = () => {
  return {
    webpack: {
      configure: {
        output: {
          publicPath: 'auto',
        },
      },
      plugins: {
        add: [
          new ModuleFederationPlugin({
            name: 'inputs',
            filename: 'remoteEntry.js',
            exposes: {
              './App': './src/App',
            },
            shared: {
              ...deps,
              '@mf-example/ui': {
                singleton: true,
              },
              '@mf-example/utils': {
                singleton: true,
              },
              react: {
                singleton: true,
                requiredVersion: deps.react,
              },
              'react-dom': {
                singleton: true,
                requiredVersion: deps['react-dom'],
              },
            },
          }),
        ],
      },
    },
  };
};
