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
      name: 'Special Chow Mein',
      price: '8',
      picture: 'images/foodItems/chowMein.png',
      description: 'So satisfying with meat or without, vegetables, classic chow mein noodles, and the best homemade chow mein sauce.',
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
      description: 'This honey chicken is crispy pieces of chicken breast that are fried to golden brown perfection, then tossed in a sweet and savory honey sauce.',
    },
    {
      name: 'Kung Pao Chicken',
      picture: 'images/foodItems/kungPaoChicken.png',
      description: 'Is highly addictive stir-fried chicken with the perfect combination of salty, sweet and spicy flavour!',
    },
    {
      name: 'Orange Chicken',
      picture: 'images/foodItems/orangeChicken.png',
      description: 'It is a sweet orange sauce made with orange juice, vinegar, garlic, sugar, soy sauce, ginger, red chili flakes, and orange zest. It is both sweet and spicy and full of flavor.',
    },
    {
      name: 'Teriyaki Chicken',
      picture: 'images/foodItems/teriyakiChicken.png',
      description: 'Teriyaki that is grilled meat with a simple glaze made of soy sauce, mirin, sake, and sugar.',
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
