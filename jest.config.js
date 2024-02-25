module.exports = {
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov'],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/pages/**',
    '!**/constants/**',
    '!**/.next/**',
    '!**/*.style.{js,jsx,ts,tsx}',
    '!**/next.config.js',
    '!.prettierrc.js',
    '!**/jest.config.js',
    '!**/next-env.d.ts',
  ],
  coverageThreshold: {
    global: {
      lines: 70,
    },
  },
}
