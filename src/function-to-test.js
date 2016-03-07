'use strict';

module.exports = functionToTest;

function functionToTest(shouldPass) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldPass) {
        return resolve('Good');
      }
      else {
        return reject('Bad');
      }
    }, 10);
  });
}
