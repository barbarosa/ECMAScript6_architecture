/**
 * Basket Component Spec
 */

'use strict';

import {expect} from 'chai';
import React from 'react/addons';
import jsdom from 'jsdom';
import cheerio from 'cheerio';

import BasketComponent from './../../src/js/components/Basket.js';

// init jsdom
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.parentWindow;

const TestUtils = React.addons.TestUtils;

/**
 * @test {BasketComponent}
 */
describe('Basket Component', () => {

  before(function () {

    let renderedComponent = TestUtils.renderIntoDocument(<BasketComponent />, document.body);
    let inputComponent = TestUtils.findRenderedDOMComponentWithClass(
      renderedComponent,
      'basket'
    );

    global.element = inputComponent.getDOMNode();
    global.$ = cheerio.load(String(global.element.outerHTML));
  });

  it('Expect to have the given basket class', () => {
    expect(global.element.getAttribute('class')).to.equal('basket');
  });

  it('Expect to contain the given markup text', () => {
    expect(global.$('.basket').text()).to.contain('Basket');
  });

  it('Expect to contain the UL that will contain items', () => {
    expect(global.$('.basket ul')).not.to.be.empty;
  });

  it('Expect no initial items to be rendered', () => {
    expect(global.$('.basket ul').html()).to.be.empty;
  });

});
