import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import "./ItemList.css";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase";
import { async } from "@firebase/util";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";

const ItemList = () => {
  const [products, setProducts] = useState([]);

  const { category } = useParams();

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

  const filterByCategory = (array, category) => {
    return array.map((product, i) => {
      product.category === category &&
        setProducts((products) => [...products, product]);
    });
  };

  useEffect(async () => {
    const productos = await getProducts();
    category ? filterByCategory(productos, category) : setProducts(productos);
  }, [category]);

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
