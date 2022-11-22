// import { menuItems } from '../items';
// console.log(menuItems);

const initialState = {
  sides: [
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
    {
      name: 'Chow Mein',
      price: '8',
      picture: 'images/foodItems/chowMein.png',
      description: 'Fried Noodles',
    },
  ],
  entrees: [
    {
      name: 'Beef and Broccoli',
      picture: '/images/foodItems/beef&Broccoli.png',
      description: 'Sauteed beef with steamed broccoli',
    },

    {
      name: 'Honey Sesame Chicken',
      picture: 'images/foodItems/honeySesameChicken.png',
      description: 'Honey Glazed fried chicken',
    },
    {
      name: 'Kung Pao Chicken',
      picture: 'images/foodItems/kungPaoChicken.png',
      description: 'Chicken with Vegetables',
    },
    {
      name: 'Orange Chicken',
      picture: 'images/foodItems/orangeChicken.png',
      description: 'Crispy fried chicken with an orange glaze ',
    },
    {
      name: 'Teriyaki Chicken',
      picture: 'images/foodItems/teriyakiChicken.png',
      description: 'Chicken all the way from Teriyaki, Japan',
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
