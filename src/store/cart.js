const initialState = {
  show: true,
  totalItems: 2,
  totalPrice: 17.98,
  items: [
    {
      combo: '#1 Magic Bowl',
      side1: 'White Rice',
      entree1: 'Beef and Broccoli',
      total: 8.99,
    },
    {
      combo: '#1 Magic Bowl',
      side1: 'White Rice',
      entree1: 'Kung Pao Chicken',
      total: 8.99,
    },
  ],
};

function addToCart(payload) {
  return {
    type: 'ADD_TO_CART',
    payload,
  };
}

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log('added');
      console.log(state);
      console.log(action.payload);
      return {
        ...state,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + action.payload.total,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
}

module.exports = {
  addToCart,
  cartReducer,
};
