import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = () => {
  const [products, setProducts] = useState([]);

  const mock = [
    {
      id: 1,
      title: "Monitor",
      description: "View Sonic 27",
      price: "ARS 60.000",
      pictureUrl: "monitor.webp",
    },
    {
      id: 2,
      title: "Teclado",
      description: "Corsair Arpon",
      price: "ARS 45.000",
      pictureUrl: "corsairk70.webp",
    },
    {
      id: 3,
      title: "Auriculares",
      description: "Steelseries arctic 5",
      price: "ARS 80.000",
      pictureUrl: "204333-1200-auto.webp",
    },
  ];

  const getProducts = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        return res(mock);
      }, 2000);
    });
  };
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
