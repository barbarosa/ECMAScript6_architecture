/**
 * Product component
 */

'use strict';

import React from 'react';
import {cursors, shoppingCart} from '../services/ShoppingCart.js';

let ProductListComponent = React.createClass({

  getInitialState () {
    return {
      products: cursors.products.get()
    };
  },

  addProductToBasket (item) {
    shoppingCart.addItem(item);
  },

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

});

export default ProductListComponent;
