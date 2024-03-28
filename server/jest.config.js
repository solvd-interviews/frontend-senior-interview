/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    globalSetup: "<rootDir>/jest.setup.ts",
    globalTeardown: "<rootDir>/jest.teardown.ts",
};
