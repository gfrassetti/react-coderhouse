import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = () => {
  const [products, setProducts] = useState([]);


  const getProducts = () => {
    try {
      const response = await fetch(`http://localhost:3000/api.json`);
      const dataJson = await response.json();
      return dataJson;
    } catch (err) {
      throw console.log("Error to fecth data", err);
    }
  }
  
  useEffect(async () => {
    const productos = await getProducts();
    const product = setProducts(productos);
  }, []);

  return (
    <div className="items-container row">
      {products.map((product) => {
        const { id } = product;
        return <Item data={product} key={id} />;
      })}
    </div>
  );
};

export default ItemList;
