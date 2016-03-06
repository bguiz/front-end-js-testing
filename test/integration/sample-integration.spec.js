'use strict';

const chai = require('chai');
const expect = chai.expect;

describe('basic webdriverio tests', function() {
  it('title promise', function() {
    return expect(browser.url('/').getTitle())
      .to.eventually.be.equal('Front-end Javascript Testing');
  });
});
