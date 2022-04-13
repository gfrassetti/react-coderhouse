import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./components/Context/CartContext";

const App = () => {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/home" element={<h1>Home Page</h1>} />
            <Route path="/contact" element={<h1>Contact Page</h1>} />
            <Route
              path="/products"
              element={<ItemListContainer title="Productos disponibles" />}
            />
            <Route path="/products/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<h1>Cart</h1>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
};

export default App;
