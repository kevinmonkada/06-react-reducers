import React, {useReducer} from "react";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import ProductItem from "./ProductItem";
import CartItem from "./CartItem";
import {TYPES} from "../actions/shoppingActions";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const {products, cart} = state;

  const addToCart = (id) => {
    //console.log(id);
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: id,
    });
  };

  const removeFromCart = (id) => {
    console.log(id);
  };

  const clearCart = () => {};

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={clearCart}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} removeFromCart={removeFromCart} />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;
