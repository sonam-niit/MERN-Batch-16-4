//configuration file which tells to look for test files with .test.js or .spec.js extention

module.exports={
    testEnvironment:'jsdom',
    testMatch:['**/__tests__/**/*.js?(x)','**/?(*./)+(spec|test).js?(x)'],
}