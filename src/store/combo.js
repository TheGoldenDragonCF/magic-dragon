const initialState = [
  {
    name: '#1 Magic Bowl',
    description1: 'Choice of 1 Entree with Steamed Rice',
    picture: '/images/foodItems/beef&Broccoli.png',
    price: '$8.99 +Tax',
    description2: '',
  },
  {
    name: '#2 Magic Platter',
    description1: 'Choice of 2 Entree with Steamed Rice',
    picture: '/images/foodItems/beef&Broccoli.png',
    price: '$10.99 +Tax',
    description2: '',
  },
  {
    name: '#3 Dragon Combo',
    description1: 'Choice of 2 Entree with Fried Rice & Chow Main',
    picture: '/images/foodItems/beef&Broccoli.png',
    price: '$12.99 +Tax',
    description2: 'Best Value!!',
  },
  {
    name: '#4 Family Value Pack',
    description1: 'Choice of 1 Entree with Steamed Rice',
    picture: '/images/foodItems/beef&Broccoli.png',
    price: '$43.99 +Tax',
    description2: '(Serves 4-6)',
  },
];

function addToCombo(payload) {
  return {
    type: 'ADD_TO_COMBO',
    payload,
  };
}

function comboReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_COMBO':
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
  addToCombo,
  comboReducer,
};
