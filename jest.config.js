const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // Path to Next.js app to load next.config.js
    dir: "./"
})

// Custom config to be passed to jest
const customJestConfig = ({
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom'      
})

// export 
module.exports = createJestConfig(customJestConfig)