const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 1. Enable SWC for Emotion and Styled Components (replaces .babelrc)
  compiler: {
    styledComponents: true,
    emotion: true,
  },

  // 2. Fix the "Deoptimised styling" warning by optimizing MUI imports
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
  },

  // 3. Restore your custom aliases so imports like '@/styles' work again
  webpack: (config) => {
    config.resolve.alias['@/styles'] = path.join(__dirname, 'styles')
    config.resolve.alias['@/components'] = path.join(__dirname, 'components')
    config.resolve.alias['@/pages'] = path.join(__dirname, 'pages')
    config.resolve.alias['@/utils'] = path.join(__dirname, 'utils')
    config.resolve.alias['@/data'] = path.join(__dirname, 'data')
    config.resolve.alias['@/constants'] = path.join(__dirname, 'constants')
    config.resolve.alias['@/contexts'] = path.join(__dirname, 'contexts')

    return config
  },
}

module.exports = nextConfig
