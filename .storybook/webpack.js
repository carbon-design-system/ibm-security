/**
 * @file webpack configuration.
 * @copyright IBM Security 2019
 */

module.exports = config => {
  [
    {
      test: /\.stories\.js$/,
      use: '@storybook/addon-storysource/loader',
    },
    {
      sideEffects: true,
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: { importLoaders: 2 },
        },
        'postcss-loader',
        {
          loader: 'sass-loader',
          options: {
            includePaths: ['node_modules'],
          },
        },
      ],
    },
  ].forEach(rule => config.module.rules.push(rule));

  return config;
};
