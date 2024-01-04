import {TYPES} from "../actions/shoppingActions";

export const shoppingInitialState = {
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://via.placeholder.com/150",
      stock: 12,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "https://via.placeholder.com/150",
      stock: 13,
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image: "https://via.placeholder.com/150",
      stock: 14,
    },
    {
      id: 4,
      name: "Product 4",
      price: 100,
      image: "https://via.placeholder.com/150",
      stock: 15,
    },
    {
      id: 5,
      name: "Product 5",
      price: 200,
      image: "https://via.placeholder.com/150",
      stock: 16,
    },
    {
      id: 6,
      name: "Product 6",
      price: 300,
      image: "https://via.placeholder.com/150",
      stock: 17,
    },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      //console.log(newItem);
      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? {...item, quantity: item.quantity + 1}
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, {...newItem, quantity: 1}],
          };
    }
    case TYPES.REMOVE_FROM_CART: {
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
    }
    case TYPES.CLEAR_CART: {
    }
    default:
      return state;
  }
}
