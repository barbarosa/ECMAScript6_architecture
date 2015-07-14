/**
 * Central application state
 */

'use strict';

import Baobab from 'baobab';

//setup the initial app state
//could be after a server call a client side database, localstorage etc
let AppState = new Baobab({

  'basket': {
    'items': []
  },

  'productList': {
     //lets add some healthy products
    'products': ['almonds', 'walnuts', 'hazelnuts', 'peanuts', 'pine nuts']
  }

});

export default AppState;
