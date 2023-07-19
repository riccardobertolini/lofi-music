const path = require('path')

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@/styles'] = path.join(__dirname, 'styles')
    config.resolve.alias['@/components'] = path.join(__dirname, 'components')
    config.resolve.alias['@/pages'] = path.join(__dirname, 'pages')
    config.resolve.alias['@/utils'] = path.join(__dirname, 'utils')
    config.resolve.alias['@/constants'] = path.join(__dirname, 'constants')

    return config
  },
}
