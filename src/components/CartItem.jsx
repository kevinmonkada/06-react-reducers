import React from "react";

const CartItem = ({data, removeFromCart}) => {
  let {id, name, price, image, stock, quantity} = data;
  return (
    <div
      className="box grid-responsive"
      style={{
        borderBottom: "thin solid gray",
        padding: "1rem",
        textAlign: "center",
      }}>
      <img className="img-product" src={image} alt={name} />
      <h4>{name}</h4>
      <h5>
        ${price}.00 x{quantity} = ${price * quantity}.00
      </h5>
      <button onClick={() => removeFromCart(id)}>Eliminar Uno</button>
      <br />
      <button onClick={() => removeFromCart(id, true)}>Eliminar Todos</button>
      <br />
      <br />
    </div>
  );
};

export default CartItem;
