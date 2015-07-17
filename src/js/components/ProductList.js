'use strict';

import React from 'react';
import {cursors, shoppingCart} from '../services/ShoppingCart.js';

/**
 * ProductList Component
 * @extends {React.Component}
 */
export default class ProductListComponent extends React.Component {

  /**
   * @desc sets initial state from products AppState
   */
  constructor () {
    super();
    this.state = {products: cursors.products.get()};
  }

  /**
   * @param item {string}
   */
  addProductToBasket (item) {
    shoppingCart.addItem(item);
  }

  /**
   * @returns {XML}
   */
  render () {
    return <div className="productList">
      Product list: <br />
      <ul>
      {this.state.products.map(
          item => {
            return <li>{item} <button onClick={this.addProductToBasket.bind(this, item)}>add</button></li>;
          }
      )}
      </ul>
    </div>;
  }
}
