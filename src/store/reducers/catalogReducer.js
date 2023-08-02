const initialState = {
    products:[],
    selected:null
  };

  export default (state = initialState, action) => {
    switch (action.type) {
        case "INITIALIZE_CATALOG":{
          console.log("action.products", action.products);
            return {
                products: action.products,
                selected:null
              };
        }
        case "PRODUCT_DETAILS":{
          console.log("product selected", action.selected);
            return {
                ...state,
                selected:action.selected
              };
        }
        default: {
            return state;
          }
    }
  }