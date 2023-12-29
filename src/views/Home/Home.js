import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import data from "./data.json";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import './Home.css'

function Home() {
    
  const [prodata, setProdata] = useState(data.products);

  useEffect(() => {
    setProdata(data.products);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="d-flex  justify-content-evenly flex-wrap p-3">
      {prodata?.map((product, index) => {
        const {
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
        } = product;

        return (
          <div key={index} className="product-card m-3" >
            <ProductCard id={id} title={title} description={description} price={price} 
            discountPercentage={discountPercentage}
            rating={rating} stock={stock} brand={brand} category={category} thumbnail={thumbnail} images={images}/>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Home;
