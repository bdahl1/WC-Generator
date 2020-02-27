console.log('')
console.log('Build started...');

// Required dependency
const tokenConfig = require('style-dictionary').extend('./scripts/tokenConfig.json');
const componentConfig = require('style-dictionary').extend('./scripts/componentConfig.json');

// Style Dictionary build function
tokenConfig.buildAllPlatforms();
componentConfig.buildAllPlatforms();
