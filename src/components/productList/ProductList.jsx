import React, { Component } from "react";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Here are some of my Photos</h1>
        <p className="pl-desc">
          “Photography is a way of feeling, of touching, of loving. What you
          have caught on film is captured forever… It remembers little things,
          long after you have forgotten everything.” — Aaron Siskind
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
