/**
 * @file Jest configuration.
 * @copyright IBM Security 2021
 */

module.exports = {
  collectCoverage: true,
  rootDir: 'src',
  setupFilesAfterEnv: ['<rootDir>/../config/jest'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
  testTimeout: 10000,
};
