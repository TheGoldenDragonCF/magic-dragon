// import { menuItems } from '../items';
// console.log(menuItems);

const initialState = {
  total: 8,
  menuItems: [
    {
      name: 'Beef and Broccoli',
      price: '8',
      picture: '/images/foodItems/beef&Broccoli.png',
      description: 'Sauteed beef with steamed broccoli',
    },
    {
      name: 'Chow Mein',
      price: '8',
      picture: 'images/foodItems/chowMein.png',
      description: 'Fried Noodles',
    },
    {
      name: 'Honey Sesame Chicken',
      price: '8',
      picture: 'images/foodItems/honeySesameChicken.png',
      description: 'Honey Glazed fried chicken',
    },
    {
      name: 'Kung Pao Chicken',
      price: '8',
      picture: 'images/foodItems/kungPaoChicken.png',
      description: 'Chicken with Vegetables',
    },
    {
      name: 'Orange Chicken',
      price: '8',
      picture: 'images/foodItems/orangeChicken.png',
      description: 'Crispy fried chicken with an orange glaze ',
    },
    {
      name: 'Teriyaki Chicken',
      price: '8',
      picture: 'images/foodItems/teriyakiChicken.png',
      description: 'Chicken all the way from Teriyaki, Japan',
    },
    {
      name: 'White Rice',
      price: '8',
      picture: 'images/foodItems/whiteRice.png',
      description: 'White rice cooked to perfection',
    },
    {
      name: 'Fried Rice',
      price: '8',
      picture: 'images/foodItems/friedRice.png',
      description: 'Fried rice',
    },
  ],
};

function addToMenu(payload) {
  return {
    type: 'ADD_TO_MENU',
    payload,
  };
}

function menuReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_MENU':
      return {
        ...state,
        // total: state.total + 1,
        // products: [...state.products, action.payload],
      };
    default:
      return state;
  }
}

module.exports = {
  addToMenu,
  menuReducer,
};
