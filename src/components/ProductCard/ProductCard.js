import React from "react";
import "./ProductCard.css";
import { BsFillGiftFill } from 'react-icons/bs';
import ProductRating from "../ProductRatings/ProductRatings";


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
    <div>
    <div className="">
   
      <img src={thumbnail} className="product-image  "/>
      <p className="text-center fs-5 fw-bolder">{title}</p>
      <p className="fs-6 fw-normal card-text text-center text-justify">{description}</p>
    <div className=" d-flex justify-content-around">
        <span className="price-icon text text-color-rs"><i class="bi bi-currency-rupee"></i>{price}</span>
       {discountPercentage && (
        <div className="discount-icon  text-color-dp">
          <BsFillGiftFill /> {/* Display the discount icon */}
          
          <span className="text text-color-dp">{discountPercentage}% off</span>
          
        </div>
     
      )}
    </div>
    <div className="d-flex justify-content-evenly mt-4">
    <ProductRating rating={rating} />
    
       <button type="button" className="add-to-cart-btn">ADD TO CART</button>
    </div>
    </div>
    </div>
  );
}

export { ProductCard };
