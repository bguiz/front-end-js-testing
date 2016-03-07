'use strict';

const functionToTest = require('./function-to-test.js');

document.addEventListener('DOMContentLoaded', () => {
  var pressMeButton = document.querySelector('.press-me');
  var doNotPressMeButton = document.querySelector('.do-not-press-me');
  var outputAreaSpan = document.querySelector('.output-area');
  [
    { button: pressMeButton, value: true, },
    { button: doNotPressMeButton, value: false, }
  ].forEach((input) => {
    input.button.addEventListener('click', buttonPress.bind(undefined, input.value));
  });

  function buttonPress(shouldPass) {
    functionToTest(shouldPass)
      .then((value) => {
        outputAreaSpan.innerHTML = `Resolved: ${value}`;
      })
      .catch((err) => {
        outputAreaSpan.innerHTML = `Rejected: ${err}`;
      });
  }
});
