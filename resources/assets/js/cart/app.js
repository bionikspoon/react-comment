import React from'react'
import FluxCartApp from'./components/FluxCartApp.react'
import CartAPI from'./utils/CartAPI'
import ProductData from'./ProductData'

ProductData.init();

CartAPI.getProductData();

React.render(<FluxCartApp />, document.getElementById('main'));
