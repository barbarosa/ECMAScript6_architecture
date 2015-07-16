/**
 * Handles Basket Logic communicating with the central state
 */

'use strict';

import AppState from './../state/AppState.js';

//baobab cursors
let cursors = {
  basketItems: AppState.select('basket', 'items'),
  products: AppState.select('productList', 'products')
};

//shopping cart logic
//changes the baobab data structure
let shoppingCart = {

  /**
   * @param item - string
   */
  addItem (item) {
    cursors.basketItems.push(item);
  },

  /**
   * @param item - string
   */
  removeItem (item) {
    cursors.basketItems.splice([this.items().indexOf(item), 1]);
  },

  items () {
    return cursors.basketItems.get();
  }

};

export {cursors, shoppingCart};
