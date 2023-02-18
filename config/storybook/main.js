module.exports = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-react-i18next',
  ],
  framework: '@storybook/react',
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        fsCache: true,
      },
    },
  },
  // webpackFinal: webpackConfig,
};
