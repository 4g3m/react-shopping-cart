const productReducer = ((state=[], action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return state.concat(action.products);

    case 'ADD_PRODUCT':
      return state.concat(action.product);

    case 'UPDATE_PRODUCT':
      return state.map((product) => {
        if (product.id === action.product.id) {
          return {...action.product};
        } else {
          return product;
        }
      })

    case 'DELETE_PRODUCT':
      return state.filter((product) => {
        return product.id !== action.id;
      })

    case 'ADD_PRODUCT_TO_CART':
      return state.map( product => {
       if (product.id === action.product.id) { 
          return {...product, quantity: product.quantity - 1 };
        } else {
          return product;
        }
      })

    case 'CHECKOUT':
      return [...action.products];

    default:
      return state;
  }
})

export default productReducer
