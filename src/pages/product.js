import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../components/breadCrumbs";

const Product = () => {
  const { id } = useParams();
  const [trendingProducts, setTrendingProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setTrendingProducts(res.products));
  }, []);
  const product = trendingProducts[id];
  return (
    <div className="flex flex-col justify-center gap-8 items-center">
      <h1 className="text-3xl">Product</h1>
      <BreadCrumbs />
      {product ? (
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl">{product.title}</h1>
          <img src={product.thumbnail} />
          <p>{product.description}</p>
          <h2>Rs {product.price}</h2>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Product;
