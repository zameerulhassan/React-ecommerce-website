import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//bringing in ProductProvider
//and wrap whole App component with it
import ProductProvider from './context/products'
ReactDOM.render(
    <ProductProvider>
    <App />
    </ProductProvider>,
     document.getElementById("root"));
 