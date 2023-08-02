import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { addToCompare } from "../store/actions/compareActions";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";


const ProductCard = ({id, brand, model, image}) => {
  const dispatch = useDispatch();
  const history = useHistory();


  
  const onClickProduct =(e) => {
    console.log("target id", e.target.id)
    history.push(`/product/${e.target.id}`);
  }

  const onClickAdd =(e) => {
    console.log(e.target.id)
    dispatch(addToCompare(e.target.id));
  }

  return (
    <div key={id} id={id}  className="product-card">
      <img src={require(`../images/${image}`)}  id={id} onClick={onClickProduct} alt="" />
      <p>{brand}</p>
      <h3>{model}</h3>
      {/* <button id={id} onClick={onClickProduct}>click to view</button> */}
      <button id={id} onClick={onClickAdd}>Add to Compare</button>
    </div>
  );
};



export default ProductCard;
