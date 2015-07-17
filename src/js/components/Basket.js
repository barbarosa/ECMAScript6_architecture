'use strict';

import React from 'react';
import {cursors, shoppingCart} from '../services/ShoppingCart.js';

/**
 * Basket Component
 * @extends {React.Component}
 */
export default class BasketComponent extends React.Component {

  /**
   * @desc sets initial state from shoppingCart items
   */
  constructor () {
    super();
    this.state = {items: shoppingCart.items()};
  }

  /**
   * @desc assigns a baobab listener after component has been mounted
   */
  componentDidMount () {
    cursors.basketItems.on('update', () => {
      this.setState({
        items: shoppingCart.items()
      });
    });
  }

  /**
   * @param item {string}
   */
  removeItemFromBasket (item) {
    shoppingCart.removeItem(item);
  }

  /**
   * @returns {XML}
   */
  render () {
    return <div className="basket">
      Basket ({this.state.items.length})
      <ul>
        {this.state.items.map(
          item => {
            return <li>{item} <button onClick={this.removeItemFromBasket.bind(this, item)}>Remove</button></li>;
          }
        )}
      </ul>
    </div>;
  }

}
