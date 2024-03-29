const { resolve } = require('path')
const { loadConfigFromFile, mergeConfig, loadEnv } = require('vite')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true,
    interactionsDebugger: true,
    emotionAlias: false
  },
  viteFinal: async (config) => {
    const { config: userConfig } = await loadConfigFromFile(
      resolve(__dirname, '../vite.config.js')
    )
    return mergeConfig(config, {
      ...userConfig,
      plugins: [],
      build: {
        minify: false,
        sourcemap: false
      }
    })
  }
}
