import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addProductToCart = (product) => {
    if (cartProducts.id === product.id) {
      console.log("Item ya agregado");
    } else {
      setCartProducts((cartProducts) => [...cartProducts, product]);
      setTotalPrice(totalPrice + product.price * product.quantity);
      console.log("producto a agregar: ", product);
    }
  };

  const data = {
    cartProducts,
    addProductToCart,
    totalPrice,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;
