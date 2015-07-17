/**
 * Unit test for Shopping Cart
 */

'use strict';

import {expect} from 'chai';
import {cursors, shoppingCart} from '../../src/js/services/ShoppingCart.js';

/**
 * @test {ShoppingCart}
 */
describe('Shopping Cart Service', () => {

  it('Expect cursors to be an object', () => {
    expect(cursors).to.be.an('object');
  });

  it('Expect cursors to contain basketItems property', () => {
    expect(cursors).to.have.property('basketItems');
  });

  it('Expect cursors to contain products property', () => {
    expect(cursors).to.have.property('products');
  });

  it('Expect shoppingCart to be an object', () => {
    expect(shoppingCart).to.be.an('object');
  });

  it('Expect shoppingCart to contain an addItem method', () => {
    expect(shoppingCart).to.respondTo('addItem');
  });

  it('Expect shoppingCart to contain a removeItem method', () => {
    expect(shoppingCart).to.respondTo('removeItem');
  });

  it('Expect shoppingCart to contain an items method', () => {
    expect(shoppingCart).to.respondTo('items');
  });

  it('Expect addItem to add one item in items', (done) => {

    //modifies the baobab tree that will keep this state
    shoppingCart.addItem('hazelnuts');

    cursors.basketItems.on('update', () => {
      expect(shoppingCart.items()).to.have.length(1);
      expect(shoppingCart.items()[0]).to.equal('hazelnuts');
    });

    done();
  });

  it('Expect removeItem to remove an item from items', (done) => {

    //modifies the same baobab tree which now will become empty
    shoppingCart.removeItem('hazelnuts');

    cursors.basketItems.on('update', () => {
      expect(shoppingCart.items()).to.be.empty;
    });

    done();
  });

});
