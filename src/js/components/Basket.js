/**
 * Basket component
 */

'use strict';

import React from 'react';
import {cursors, shoppingCart} from '../services/ShoppingCart.js';

let BasketComponent = React.createClass({

  getInitialState () {
    return {
      items: shoppingCart.items()
    };
  },

  componentDidMount () {
    cursors.basketItems.on('update', () => {
      this.setState({
        items: shoppingCart.items()
      });
    });
  },

  removeItemFromBasket (item) {
    shoppingCart.removeItem(item);
  },

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

});

export default BasketComponent;
