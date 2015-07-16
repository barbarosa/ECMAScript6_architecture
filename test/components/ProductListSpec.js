/**
 * ProductList Component Spec
 */

'use strict';

import {expect} from 'chai';
import React from 'react/addons';
import jsdom from 'jsdom';
import cheerio from 'cheerio';

import ProductListComponent from './../../src/js/components/ProductList.js';

// init jsdom
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.parentWindow;

const TestUtils = React.addons.TestUtils;

describe('ProductList Component', () => {

  before(function () {

    let renderedComponent = TestUtils.renderIntoDocument(<ProductListComponent />, document.body);
    let inputComponent = TestUtils.findRenderedDOMComponentWithClass(
      renderedComponent,
      'productList'
    );

    global.element = inputComponent.getDOMNode();
    global.$ = cheerio.load(String(global.element.outerHTML));
  });

  it('Expect to have the given productList class', () => {
    expect(global.element.getAttribute('class')).to.equal('productList');
  });

  it('Expect to contain the given markup text', () => {
    expect(global.$('.productList').text()).to.contain('Product list:');
  });

  it('Expect to contain the UL that will contain products', () => {
    expect(global.$('.productList ul')).not.to.be.empty;
  });

  it('Expect initial products to be rendered', () => {
    expect(global.$('.productList ul').html()).not.to.be.empty;
  });

  it('Expect to render 5 initial products', () => {
    expect(global.$('.productList ul li').get().length).to.equal(5);
  });

  it('Expect first product to be almonds', () => {
    expect(global.$('.productList ul li:first-child').text()).to.contain('almonds');
  });

});
