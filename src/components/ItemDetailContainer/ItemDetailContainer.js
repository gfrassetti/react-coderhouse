import { useEffect, useState, useContext, React } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader.js";
import CartContext from "../Context/CartContext";
import { getDoc, doc } from "firebase/firestore";
import db from "../../firebase";

const ItemDetailContainer = () => {
  const { addProductToCart } = useContext(CartContext);
  const { id } = useParams();
  const [data, setData] = useState({});

  const getProduct = async () => {
    try {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        let product = docSnap.data();
        product.id = docSnap.id;
        setData(product);
      } else {
        console.log("no such document");
      }
    } catch (err) {
      throw console.log("error to fecth db: ", err);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  const onAdd = (e, count) => {
    e.stopPropagation();
    addProductToCart({ ...data, quantity: count });
  };

  return (
    <>
      {Object.keys(data).length !== 0 ? (
        <ItemDetail product={data} onAdd={onAdd} />
      ) : (
        <Loader />
      )}
    </>
  );
};
export default ItemDetailContainer;
