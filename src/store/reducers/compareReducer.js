const initialState = {
    products:[]
  };

  export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_COMPARE":{
          console.log("add to compare", state.products);
            return state.products.find(item => item.id === action.product.id)
            ? {state}
            : {products:[...state.products, action.product]};
        }
        case "REMOVE_FROM_COMPARE":{
          console.log("remove from compare", action.id);          
            let findItem = state.products.find(item => item.id === action.id);
            if (findItem) {
              console.log(state.products.filter(item => item.id !== action.id));
              return {
                products: state.products.filter(item => item.id !== action.id)
              };
            } else {
              return state;
            }
          
        }
        default: {
            return state;
          }
    }
  }