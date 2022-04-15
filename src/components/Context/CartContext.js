import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addProductToCart = (product) => {
    if (cartProducts.find((cartProduct) => cartProduct.id === product.id)) {
      console.log("Item ya agregado");
    } else {
      setCartProducts((cartProducts) => [...cartProducts, product]);
      setTotalPrice(product.price + product.price);
      console.log("producto a agregar: ", product);
    }
  };
  const deleteProduct = (product) => {
    setCartProducts(
      cartProducts.filter((cartProduct) => cartProduct.id !== product.id)
    );
  };

  const data = {
    cartProducts,
    addProductToCart,
    totalPrice,
    deleteProduct,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;
