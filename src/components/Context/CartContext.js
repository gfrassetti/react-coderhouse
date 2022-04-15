import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log(cartProducts);

  const addProductToCart = (product) => {
    if (cartProducts.find((cartProduct) => cartProduct.id === product.id)) {
      cartProducts.map((cartProduct) => {
        cartProduct.quantity++;
      });
      caluclateTotalPrice();
    } else {
      setCartProducts((cartProducts) => [...cartProducts, product]);
      caluclateTotalPrice();
    }
  };
  const deleteProduct = (product) => {
    setCartProducts(
      cartProducts.filter((cartProduct) => cartProduct.id !== product.id)
    );
    caluclateTotalPrice();
  };
  const caluclateTotalPrice = () => {
    setTotalPrice(
      cartProducts.reduce(
        (acc, cartProduct) => (acc = cartProduct.quantity * cartProduct.price),
        0
      )
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
