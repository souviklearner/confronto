import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useEffect } from "react";
import { productDetails, eraseSelected } from "../store/actions/catalogActions";


const Product = () => {
const {id} = useParams();
console.log(id);
const dispatch = useDispatch();
const selected = useSelector(state=> state.catalog.selected);


  useEffect(() => {
      dispatch(productDetails(id));
  }, [dispatch, id, selected]);


  if (!selected || selected.id !== id) {
    return <div>Loading...</div>;
  }


  return (
    <div className="product-details">
      <h1>{selected.brand}</h1>
      <h3>{selected.model}</h3>
      <img src={require(`../images/${selected.image}`)} alt="" />
      <ul className="details">
        <li>{`Rear Camera : ${selected.rear_camera}`}</li>
        <li>{`Front Camera : ${selected.front_camera}`}</li>
        <li>{`Screen : ${selected.screen}`}</li>
        <li>{`Storage : ${selected.storage}`}</li>
        <li>{`OS : ${selected.os}`}</li>
        <li>{`Cost : ${selected.cost}`}</li>
      </ul>
    </div>
  );
  
  }
export default Product;
