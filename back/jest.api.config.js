module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/src/external/api/**/*.test.ts'],
    moduleNameMapper: {
        '^@/(.*)': '<rootDir>/src/$1',
    },
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
    },
    testTimeout: 30000
}