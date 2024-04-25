import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../components/breadCrumbs";

const ProductListing = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setTrendingProducts(res.products));
  }, []);

  return (
    <div className="m-4">
      <h1 className="text-2xl text-bold text-center">Products Listing</h1>
      <BreadCrumbs />
      <div className="my-4 flex gap-4 flex-wrap justify-center">
        {trendingProducts.map((product) => {
          return (
            <div
              className="w-1/3 border-2 border-blac flex flex-col items-center"
              key={product.id}>
              <Link to={`/product-listing/${product.id}`}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-64 w-full"
                />
                <h2 className="text-3xl py-2">{product.brand}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductListing;
