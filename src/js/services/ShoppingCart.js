'use strict';

import AppState from './../state/AppState.js';

/**
 * Baobab cursors
 * @type {{basketItems, products}}
 */
let cursors = {
  basketItems: AppState.select('basket', 'items'),
  products: AppState.select('productList', 'products')
};

/**
 * Shopping cart logic
 * @type {{addItem, removeItem, items}}
 */
let shoppingCart = {

  /**
   * @param item {string}
   */
  addItem (item) {
    cursors.basketItems.push(item);
  },

  /**
   * @param item {string}
   */
  removeItem (item) {
    cursors.basketItems.splice([this.items().indexOf(item), 1]);
  },

  /**
   * @desc return current basket items
   */
  items () {
    return cursors.basketItems.get();
  }

};

export {cursors, shoppingCart};
