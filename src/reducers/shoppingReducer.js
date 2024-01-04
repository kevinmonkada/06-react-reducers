import {TYPES} from "../actions/shoppingActions";

export const shoppingInitialState = {
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://via.placeholder.com/150",
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "https://via.placeholder.com/150",
      quantity: 1,
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image: "https://via.placeholder.com/150",
      quantity: 1,
    },
    {
      id: 4,
      name: "Product 4",
      price: 100,
      image: "https://via.placeholder.com/150",
      quantity: 1,
    },
    {
      id: 5,
      name: "Product 5",
      price: 200,
      image: "https://via.placeholder.com/150",
      quantity: 1,
    },
    {
      id: 6,
      name: "Product 6",
      price: 300,
      image: "https://via.placeholder.com/150",
      quantity: 1,
    },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  /* switch (action.type) {
    case TYPES.ADD_TO_CART:{}
  }
  case TYPES.REMOVE_FROM_CART: {}
  case TYPES.REMOVE_ONE_FROM_CART: {}
  case TYPES.REMOVE_ALL_FROM_CART: {}
  case TYPES.CLEAR_CART: {}
  default:
    return state; */
}
