'use strict';

const functionToTest = require('./function-to-test.js');

console.log('before DOM content loaded');
document.addEventListener('DOMContentLoaded', () => {
  console.log('after DOM content loaded');
});
