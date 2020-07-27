import React,{useContext} from "react";
import {ProductContext} from "../context/products";
import loading from '../components/Loading'
import ProductList from '../components/Products/ProductList'
import Loading from "../components/Loading";

export default function Products() {
  //console.log(React.useContext(ProductContext))
  const {products, loading}=(React.useContext(ProductContext))
  console.log(products);
  if(loading){
    return <Loading />
  }
  return <ProductList title="our prodcuts"  products={products}/>
}
