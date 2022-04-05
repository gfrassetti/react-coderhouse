import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
          <Route path="/products" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
