import { useEffect, useState, React } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(async () => {
    const products = await getProducts();
    products.map((product) => {
      if (product.id == id) {
        return setData(product);
      }
    });
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api.json`);
      const dataJson = await response.json();
      return dataJson;
    } catch (err) {
      throw console.log("Error to fecth data", err);
    }
  };

  return (
    <>
      <div className="item-container-detail">
        <ItemDetail product={data} />
      </div>
    </>
  );
};
export default ItemDetailContainer;
