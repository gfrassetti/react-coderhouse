import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase";
import { async } from "@firebase/util";
import Loader from "../Loader/Loader";

const ItemList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const connection = collection(db, "products");
      const productsSnapshot = await getDocs(connection);
      const productList = productsSnapshot.docs.map((doc) => {
        let product = doc.data();
        product.id = doc.id;
        return product;
      });
      return productList;
    } catch (err) {
      throw console.log("error to fecth db: ", err);
    }
  };

  useEffect(async () => {
    const productos = await getProducts();
    setProducts(productos);
  }, []);

  return (
    <div className="items-container row">
      {products.length !== 0 ? (
        products.map((product) => {
          const { id } = product;
          return <Item data={product} key={id} />;
        })
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ItemList;
