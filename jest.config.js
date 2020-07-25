module.exports = {
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  modulePathIgnorePatterns: ['<rootDir>/cypress/'],
  transform: {
    '\\.(ts|tsx)$': 'babel-jest',
  },

}