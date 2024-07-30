const path = require('path');
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');
const { commonSections } = require('./helpers');

const webpackConfig = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

module.exports = {
  skipComponentsWithoutExample: false,
  pagePerSection: true,
  title: 'Qmedia UI',
  webpackConfig,
  components: ['../src/**/*.tsx'],
  sections: commonSections,
  moduleAliases: {
    'qmedia-ui': path.resolve(__dirname, '../src/'),
  },
  styleguideDir: path.join(__dirname, './build'),
  styleguideComponents: {
    ComplexType: '/guide/components/ComplexType',
    StyleGuideRenderer: '/guide/components/StyleGuideRenderer',
    Preview: '/guide/components/Preview',
  },
  theme: {
    fontFamily: {
      base: 'Mulish, Arial, sans-serif',
      monospace: 'JetBrains Mono, Menlo, Monaco, Consolas, "Courier New", monospace',
    },
  },
};
