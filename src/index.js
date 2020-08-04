import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//bringing in ProductProvider
//and wrap whole App component with it
import ProductProvider from './context/products'
import {CartProvider} from './context/cart'
ReactDOM.render(
    <ProductProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </ProductProvider>,
     document.getElementById("root"));
 