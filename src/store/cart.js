const initialState = {
  show: true,
  total: 0,
  items: [
    {
      combo: '#1 Magic Bowl',
      side: 'White Rice',
      entree: 'Beef and Broccoli',
      price: 8,
    },
    {
      combo: '#1 Magic Bowl',
      side: 'White Rice',
      entree: 'Kung Pao Chicken',
      price: 8,
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
      return {
        ...state,
        total: state.total + 1,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
}

module.exports = {
  addToCart,
  cartReducer,
};
