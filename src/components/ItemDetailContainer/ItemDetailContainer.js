import { useEffect, useState, useContext, React } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader.js";
import CartContext from "../Context/CartContext";


const ItemDetailContainer = () => {
  const { addProductToCart } = useContext(CartContext);
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isAdded, setAdded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  const onAdd = (e, count) => {
    e.stopPropagation();
    console.log(`Agregaste ${count} unidad/es de ${data.title} al carrito `);
    setAdded(true);
    addProductToCart(data);
  };

  return (
    <>
      {Object.keys(data).length !== 0 ? (
        <ItemDetail product={data} onAdd={onAdd} isAdded={isAdded} />
      ) : (
        <Loader />
      )}
    </>
  );
};
export default ItemDetailContainer;
