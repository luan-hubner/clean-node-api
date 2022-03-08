module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/**/validator.ts',
    '!<rootDir>/src/**/*-protocols.ts',
    '!**/protocols/**'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  coverageProvider: 'babel',
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
