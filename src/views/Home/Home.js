import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import data from "./data.json";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import './Home.css';
import Footer from "../../components/Footer/Footer";

function Home() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user") || '{}');
    
    if (!storageUser?.email) {
      alert("You are not logged in!");
      window.location.href = '/login';  // This line might be causing an infinite loop
    } else {
      setUser(storageUser);
    }
  }, []); // Removed 'user' from the dependency array to prevent unnecessary reloads

  const [prodata, setProdata] = useState(data.products);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const filterdata = prodata.filter((product) => {
      const title = product.title.toLocaleLowerCase();
      const price = String(product.price).toLowerCase();
      const query = search.toLocaleLowerCase();

      return title.includes(query) || price.includes(query);
    });
    setProdata(filterdata);
  }, [search, prodata]);

  return (
    <div>
      <Navbar />
      <input
        type="text"
        placeholder="Search"
        className="d-block mx-auto col-8 col-sm-6 search-bar"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="d-flex justify-content-evenly flex-wrap p-3">
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
            <div key={index} className="product-card m-3">
              <ProductCard
                id={id}
                title={title}
                description={description}
                price={price}
                discountPercentage={discountPercentage}
                rating={rating}
                stock={stock}
                brand={brand}
                category={category}
                thumbnail={thumbnail}
                images={images}
              />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
