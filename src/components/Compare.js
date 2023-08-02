import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../store/actions/compareActions";

const Compare = () => {
  const dispatch = useDispatch();

  const onClickRemove =(e) => {
    console.log(e.target.id)
    dispatch(removeItem(e.target.id));
  }
  const compare = useSelector(state => state.compare.products)

  return <>
    <div className="comparison-grid">
      <div className="feature-labels">
        <div></div>
        <div>Brand</div>
        <div>Model</div>
        <div>Rear Camera</div>
        <div>Front Camera</div>
        <div>Screen</div>
        <div>Storage</div>
        <div>OS</div>
        <div>Cost</div>
      </div>
      <div className="product-table">
      {compare.map((item) => {
      console.log(item);
      return (
        <div key={item.id} className="product-features">
          <div>
            <img src={require(`../images/${item.image}`)} alt="" />
          </div>
          <div>{item.brand}</div>
          <div>{item.model}</div>
          <div>{item.rear_camera}</div>
          <div>{item.front_camera}</div>
          <div>{item.screen}</div>
          <div>{item.storage}</div>
          <div>{item.os}</div>
          <div>`$${item.storage}`</div>
          <div>
            <button id={item.id} onClick={onClickRemove}>REMOVE</button>
          </div>
      </div>)})}
      </div>
    </div> 
</>
}
export default Compare;
