

  
  export const removeItem = id => {
    return {
      type: "REMOVE_FROM_COMPARE",
      id: id
    };
  };

  
export const addToCompare = (id) => dispatch => {
    console.log("dispatching  add to compare");
  fetch(`/api/product/${id}`).then((response) => response.json()).then(json => {
    console.log(json);
    dispatch({
      type: "ADD_TO_COMPARE",
      product: json.products
    });
  }).catch(error => {throw(error)});
};
