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
            name: 'app-host',
            filename: 'remoteEntry.js',
            remotes: {
              inputs:
                process.env.NODE_ENV === 'production'
                  ? 'inputs@http://localhost:5000/inputs/remoteEntry.js'
                  : 'inputs@http://localhost:3001/remoteEntry.js',
              result:
                process.env.NODE_ENV === 'production'
                  ? 'result@http://localhost:5000/result/remoteEntry.js'
                  : 'result@http://localhost:3002/remoteEntry.js',
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
