const initialState = [
  {
    name: '#1 Magic Bowl',
    description1: 'Choice of 1 Entree with Steamed Rice',
    picture: '	https://thumbs.dreamstime.com/b/asian-beef-broccol…rice-close-up-horizontal-plate-table-48399782.jpg',
    price: '$8.99 +Tax',
    description2: '',
  },
  {
    name: '#2 Magic Platter',
    description1: 'Choice of 2 Entree with Steamed Rice',
    picture: 'https://thumbs.dreamstime.com/b/homemade-orange-chicken-rice-26454555.jpg',
    price: '$10.99 +Tax',
    description2: '',
  },
  {
    name: '#3 Dragon Combo',
    description1: 'Choice of 2 Entree with Fried Rice & Chow Main',
    picture: '	https://t3.ftcdn.net/jpg/02/91/08/96/240_F_291089600_atlwRvHBQCzLUkkL2treoOKcs7ckHazi.jpg',
    price: '$12.99 +Tax',
    description2: 'Best Value!!',
  },
  {
    name: '#4 Family Value Pack',
    description1: 'Choice of 1 Entree with Steamed Rice',
    picture: '	https://restaurantclicks.com/wp-content/uploads/2022/04/chinese-food-dishes.jpg',
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
