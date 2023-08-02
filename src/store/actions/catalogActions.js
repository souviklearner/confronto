
export const initCatalog = () => dispatch => {
    console.log("dispatching");
  fetch("/api/products").then((response) => response.json()).then(json => {
    dispatch({
      type: "INITIALIZE_CATALOG",
      products: json
    });
  }).catch(error => {throw(error)});
};


export const productDetails = (id) => dispatch => {
    console.log("dispatching  product details");
  fetch(`/api/product/${id}`).then((response) => response.json()).then(json => {
    dispatch({
      type: "PRODUCT_DETAILS",
      selected: json.products
    });
  }).catch(error => {throw(error)});
};

