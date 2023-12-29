import React from "react";
import "./ProductCard.css";
import { BsFillGiftFill } from 'react-icons/bs';


function ProductCard({
  id,
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
  images,
}) {
  return (
    <div className="">
   
      <img src={thumbnail} className="product-image"/>
      <p className="text-center fs-5 fw-bolder">{title}</p>
      <p className=" fs-6  fw-normal card-text">{description}</p>
    <div className=" d-flex justify-content-around">
        <span className="price-icon">{price}</span>
       {discountPercentage && (
        <div className="discount-icon">
          <BsFillGiftFill /> {/* Display the discount icon */}
          <span>{discountPercentage}% off</span>
        </div>
      )}
    </div>
    </div>
  );
}

export { ProductCard };
