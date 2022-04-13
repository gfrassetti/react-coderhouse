import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addProductToCart = (product) => {
    if (cartProducts.includes(product)) {
      console.log("Item ya agregado");
    } else {
      setCartProducts((cartProducts) => [...cartProducts, product]);
      console.log("producto a agregar: ", product);
    }
  };

  const data = {
    cartProducts,
    addProductToCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;
