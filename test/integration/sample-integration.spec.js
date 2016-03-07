'use strict';

const chai = require('chai');
const expect = chai.expect;

describe('[main page]', function() {
  it('should have a title', function() {
    return expect(browser.url('/').getTitle())
      .to.eventually.be.equal('Front-end Javascript Testing');
  });

  it('should have a press me button', function() {
    return expect(browser.getText('.press-me'))
      .to.eventually.be.equal('Press Me');
  });

  it('should have a press me button', function() {
    return expect(browser.getText('.press-me'))
      .to.eventually.be.equal('Press Me');
  });

  it('should have an output area which is intially empty', function() {
    return expect(browser.getText('.output-area'))
      .to.eventually.be.equal('');
  });

  it('should click the press me button', function() {
    return browser.click('.press-me');
  });

  it('should have an output area with resolved text', function() {
    return expect(browser.getText('.output-area'))
      .to.eventually.be.equal('Resolved: Good');
  });

  it('should have a do not press me button', function() {
    return expect(browser.getText('.do-not-press-me'))
      .to.eventually.be.equal('Do Not Press Me');
  });

  it('should click the do not press me button', function() {
    return browser.click('.do-not-press-me');
  });

  it('should have an output area with rejected text', function() {
    return expect(browser.getText('.output-area'))
      .to.eventually.be.equal('Rejected: Bad');
  });
});
