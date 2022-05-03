import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(
    localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : []
  );
  const [totalPrice, setTotalPrice] = useState(0);

  const addProductToCart = (product) => {
    if (cartProducts.find((cartProduct) => cartProduct.id === product.id)) {
      const newArray = cartProducts.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          cartProduct.quantity = cartProduct.quantity + product.quantity;
        }
        return cartProduct;
      });
      setCartProducts(newArray);
    } else {
      setCartProducts((cartProducts) => [...cartProducts, product]);
      localStorage.setItem(
        "products",
        JSON.stringify([...cartProducts, product])
      );
    }
  };
  const deleteProduct = (product) => {
    setCartProducts(
      cartProducts.filter((cartProduct) => cartProduct.id !== product.id)
    );
  };

  useEffect(() => {
    setTotalPrice(
      cartProducts.reduce(
        (acc, cartProduct) =>
          (acc = acc + cartProduct.quantity * cartProduct.price),
        0
      )
    );
  }, [cartProducts]);

  const data = {
    cartProducts,
    addProductToCart,
    totalPrice,
    deleteProduct,
    setCartProducts,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;
