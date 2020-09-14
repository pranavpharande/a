import React from "react";
import "./product.css";
function product({ price, title, rating, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <strong>{title}</strong>
        <p className="product__price">
          <small>₹</small>{" "}
          <strong className="product__fontColor">{price}</strong>
        </p>
        <div className="Product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button>Add to Basket</button>
    </div>
  );
}

export default product;
