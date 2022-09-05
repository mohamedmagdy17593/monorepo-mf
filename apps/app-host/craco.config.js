const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;
const mfConfig = require('../../mf-config.json');

function getMfModeReMote(name) {
  let remoteEntry = '';

  // in production env
  if (process.env.NODE_ENV === 'production') {
    remoteEntry = mfConfig.remote[name].prod;
  } else if (mfConfig.dev === '*') {
    remoteEntry = mfConfig.remote[name].dev;
  } else {
    remoteEntry =
      mfConfig.dev === name
        ? mfConfig.remote[name].dev
        : mfConfig.remote[name].prod;
  }

  console.log(`remote for "${name}" : `, remoteEntry);

  return remoteEntry;
}

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
              inputs: getMfModeReMote('inputs'),
              result: getMfModeReMote('result'),
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
