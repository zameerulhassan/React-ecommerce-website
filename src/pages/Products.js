import React,{useContext} from "react";
import {ProductContext} from "../context/products";


export default function Products() {
  console.log(React.useContext(ProductContext))
  return <h1>hello from products page</h1>;
}
