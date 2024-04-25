import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../components/breadCrumbs";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setTrendingProducts(res.products));
  }, []);

  const productSlice = trendingProducts.slice(0, 6);
  return (
    <div className="m-4 flex flex-col justify-center items-center">
      <h1 className="text-2xl text-bold">Trending Products</h1>
      <BreadCrumbs />
      <div className="my-4 flex gap-4 flex-wrap justify-center">
        {productSlice.map((product) => {
          return (
            <div
              className="w-1/3 border-2 border-blac flex flex-col items-center"
              key={product.id}>
              <Link to={`/product-listing/${product.id}`}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-4/5 w-full"
                />
                <h2 className="text-3xl py-2">{product.brand}</h2>
              </Link>
            </div>
          );
        })}
      </div>
      <Link to={"/product-listing"}>
        <button className="border-2 border-black p-4 rounded-xl">
          View All Products
        </button>
      </Link>
    </div>
  );
};

export default Home;
