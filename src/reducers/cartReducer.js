const cartReducer = ((state=[], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return [...state, action.product];

    case 'CHECKOUT':
      return [];

    default:
      return state;
  }
})

export default cartReducer
