import React, { useState } from "react";
import ProductCard from './ProductCard';
import { useSelector, useDispatch } from "react-redux";


const Catalog = () => {

  const catalog=useSelector(state => state.catalog.products)

  return <div className="products">
    {catalog.length>0 && catalog.map((item) => {
      console.log(item);
      return <ProductCard key={item.id} id={item.id} brand={item.brand} model={item.model} image={item.image}/>})}
  </div>;
};

export default Catalog;
