import React from "react";

const ProductItem = ({data, addToCart}) => {
  let {id, name, price, stock, image} = data;
  return (
    <div
      style={{border: "thin solid gray", padding: "1rem", textAlign: "center"}}>
      <img className="img-product" src={image} alt={name} />
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <h6>Stock {stock}</h6>
      <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
};

export default ProductItem;
