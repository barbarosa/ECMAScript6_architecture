/**
 * App entry point
 * Contains the initialisation of our app.
 */

'use strict';

import React from 'react';
//react components
import BasketComponent from './components/Basket.js';
import ProductListComponent from './components/ProductList.js';

React.render(<BasketComponent />, document.getElementById('basket'));
React.render(<ProductListComponent />, document.getElementById('product'));
